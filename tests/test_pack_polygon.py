"""Continuous furniture plates must have bounded, simple contours."""

import pytest
import voluptuous as vol

from custom_components.neonplan3d.packs import PART_SCHEMA


def test_mesh_data_is_bounded_and_indices_are_valid():
    base = dict(
        shape="mesh",
        x=0,
        z=0,
        w=1,
        d=1,
        y=0,
        h=1,
        color="metal",
        vertices=[[-0.5, 0, 0], [0.5, 0, 0], [0, 1, 0.5]],
        triangles=[[0, 1, 2]],
    )
    assert PART_SCHEMA(base)["triangles"] == [[0, 1, 2]]
    for change in (
        {"vertices": []},
        {"triangles": []},
        {"triangles": [[0, 1, 3]]},
        {"triangles": [[0, 1, -1]]},
        {"triangles": [[0, 1, True]]},
        {"triangles": [[0, 1, 1]]},
        {"vertices": [[0, float("nan"), 0]] * 3},
        {"vertices": [[0, 1.1, 0]] * 3},
        {"vertices": [[0, 0]] * 3},
        {"vertices": base["vertices"] * 4001},
        {"triangles": [[0, 1, 2]] * 16001},
        {"shape": "box"},
        {"edges": True},
        {"top": "wood"},
    ):
        with pytest.raises(vol.Invalid):
            PART_SCHEMA({**base, **change})


def test_polygon_contour_validation():
    base = dict(shape="poly", x=0, z=0, w=1, d=1, y=0.9, h=0.1, color="wood")
    concave = [[-0.5, -0.5], [0.5, -0.5], [0.5, 0], [0, 0], [0, 0.5], [-0.5, 0.5]]
    for points in (concave, list(reversed(concave))):
        assert PART_SCHEMA({**base, "points": points})["points"] == points
    for points in (
        [],
        [[0, 0], [0.5, 0], [0.5, 0]],
        [[-0.5, 0], [0, 0], [0.5, 0]],
        [[-0.5, -0.5], [0.5, 0.4], [-0.5, 0.5], [0.4, -0.5]],
        [[-0.6, 0], [0.5, 0], [0, 0.5]],
        concave * 30,
    ):
        with pytest.raises(vol.Invalid):
            PART_SCHEMA({**base, "points": points})
    with pytest.raises(vol.Invalid):
        PART_SCHEMA(base)
    with pytest.raises(vol.Invalid):
        PART_SCHEMA({**base, "shape": "box", "points": concave})
