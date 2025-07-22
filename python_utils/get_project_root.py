# python_utils/get_project_root.py

import sys
from pathlib import Path

def get_project_root() -> Path:
    """Returns the root directory of the project (where .git is)"""
    root = Path(__file__).resolve()
    while not (root / ".git").exists() and root != root.parent:
        root = root.parent

    if root not in map(Path, sys.path):
        sys.path.insert(0, str(root))

    return root