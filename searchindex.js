Search.setIndex({"docnames": ["content/algorithms/assortativity/correlation", "content/algorithms/dag/index", "content/algorithms/euler/euler", "content/algorithms/flow/dinitz_alg", "content/algorithms/index", "content/algorithms/lca/LCA", "content/exploratory_notebooks/facebook_notebook", "content/generators/geometric", "content/generators/index", "content/generators/sudoku", "index"], "filenames": ["content/algorithms/assortativity/correlation.md", "content/algorithms/dag/index.md", "content/algorithms/euler/euler.md", "content/algorithms/flow/dinitz_alg.md", "content/algorithms/index.md", "content/algorithms/lca/LCA.md", "content/exploratory_notebooks/facebook_notebook.md", "content/generators/geometric.md", "content/generators/index.md", "content/generators/sudoku.md", "index.md"], "titles": ["Node assortativity coefficients and correlation measures", "Directed Acyclic Graphs &amp; Topological Sort", "Euler\u2019s Algorithm", "Dinitz\u2019s algorithm and its applications", "Algorithms", "Lowest Common Ancestor", "Facebook Network Analysis", "Geometric Generator Models", "Graph Generators", "Sudoku and Graph coloring", "Welcome to nx-guides!"], "terms": {"In": [0, 1, 2, 3, 5, 6, 7, 9, 10], "thi": [0, 1, 2, 3, 5, 6, 7, 9, 10], "tutori": [0, 1, 2, 5, 7, 10], "we": [0, 1, 2, 3, 5, 6, 7, 9], "go": [0, 1, 3, 5, 9], "through": [0, 1, 2, 3, 5, 6], "theori": [0, 1, 2, 9, 10], "its": [0, 1, 2, 4, 5, 6, 9], "specif": [0, 1, 6, 7, 10], "ll": [0, 6, 7, 9], "focu": 0, "avail": 0, "networkx": [0, 4, 6, 7, 8, 9, 10], "algorithm": [0, 6, 9, 10], "py": [0, 1, 2, 3, 5, 7], "well": [0, 6, 9], "matric": 0, "which": [0, 1, 2, 3, 6, 7, 9], "ar": [0, 1, 2, 3, 5, 6, 7, 9, 10], "close": [0, 1, 7], "releat": 0, "network": [0, 1, 4, 10], "refer": 0, "tendenc": 0, "connect": [0, 1, 2, 3, 6, 7, 9], "other": [0, 1, 2, 3, 5, 6, 7, 9], "similar": [0, 6, 7], "over": [0, 3, 6], "dissimilar": 0, "here": [0, 1, 2, 3, 6, 7, 9], "sai": [0, 3, 6, 9], "two": [0, 1, 2, 3, 5, 6, 7, 9], "respect": [0, 3, 6], "properti": [0, 6, 7, 9], "thei": [0, 1, 2, 3, 5, 6, 7, 9], "have": [0, 2, 3, 6, 7, 9], "same": [0, 2, 3, 6, 9], "valu": [0, 1, 3, 6, 7, 9], "can": [0, 1, 2, 3, 5, 6, 7, 9, 10], "ani": [0, 1, 2, 3, 5, 6, 7, 9, 10], "structur": [0, 1, 2, 6, 7], "like": [0, 1, 2, 6], "weight": [0, 6, 7], "capac": 0, "base": [0, 1, 2, 3, 6, 9, 10], "differ": [0, 1, 2, 3, 6, 7, 9], "On": [0, 6], "hand": 0, "also": [0, 1, 2, 3, 5, 6], "disassort": 0, "case": [0, 2, 5, 6, 7, 9], "tend": [0, 6], "let": [0, 1, 2, 3, 5, 6, 7, 9], "": [0, 4, 6, 7, 9], "n": [0, 1, 2, 3, 6, 7, 9], "v": [0, 1, 2, 3, 5, 6, 9], "e": [0, 1, 2, 3, 5, 6, 7, 9], "where": [0, 1, 2, 3, 5, 6, 7, 9], "i": [0, 3, 6, 7, 9, 10], "set": [0, 1, 3, 5, 6, 7], "edg": [0, 1, 2, 3, 5, 6, 7, 9], "direct": [0, 2, 4, 5], "addit": [0, 3, 6], "p": [0, 3, 5], "repres": [0, 1, 2, 3, 6, 9], "each": [0, 1, 2, 3, 5, 6, 7, 9], "take": [0, 1, 2, 3, 5, 6, 9], "0": [0, 1, 2, 3, 5, 6, 7, 9], "1": [0, 3, 6, 7, 9], "k": [0, 3, 7, 9], "distinct": [0, 7], "m": [0, 1, 3], "j": [0, 7, 9], "number": [0, 2, 3, 5, 6, 7, 9], "from": [0, 2, 3, 5, 6, 7, 9], "normal": [0, 7, 9], "dive": [0, 2, 5], "total": [0, 2, 3, 6, 7], "order": [0, 1, 2, 3, 6], "frac": [0, 6, 7, 9], "now": [0, 1, 3, 6, 9], "defin": [0, 1, 3, 5, 6, 7, 9], "proport": 0, "u": [0, 1, 2, 3, 5, 6], "sum": [0, 2, 3, 6, 7], "limits_": [0, 3], "b": [0, 2, 3, 5, 6, 7], "python": [0, 5], "code": [0, 1, 2, 5], "would": [0, 1, 3, 6, 9], "look": [0, 1, 2, 4, 6, 8, 9], "someth": [0, 1, 6], "axi": [0, 3, 6], "final": [0, 1, 3], "sigma_a": 0, "sigma_b": 0, "standard": [0, 9], "deviat": 0, "cdot": 0, "Then": [0, 1, 2], "pearson": [0, 6], "nomin": 0, "assign": [0, 3, 6, 7, 9], "As": [0, 2, 6], "abov": [0, 1, 2, 3, 5, 6, 7, 10], "calcul": [0, 1, 3, 6], "below": [0, 1, 2, 3, 6, 7], "onward": 0, "us": [0, 1, 2, 3, 5, 6, 7, 9], "subscript": 0, "notat": [0, 7], "denot": [0, 2, 3, 9], "index": [0, 3, 9], "eg": 0, "p_i": 0, "e_": [0, 7], "ij": 0, "r": [0, 3, 6, 9], "ii": 0, "a_": 0, "b_": 0, "trace": 0, "2": [0, 3, 6, 7, 9], "It": [0, 1, 2, 3, 5, 6, 9], "implement": [0, 3, 7, 10], "attribute_assortativity_coeffici": 0, "definit": [0, 3], "p_j": 0, "a_i": 0, "b_j": 0, "numeric_assortativity_coeffici": 0, "when": [0, 1, 3, 6, 7], "come": [0, 6], "more": [0, 1, 2, 3, 5, 6, 7, 9], "option": [0, 6, 7], "compar": 0, "w": [0, 2, 3, 5], "t": [0, 1, 2, 3, 5, 6], "becaus": [0, 1, 6, 9], "type": [0, 1, 3, 7, 9], "name": [0, 3, 6, 7], "out": [0, 1, 2, 3, 6], "time": [0, 1, 2, 3, 6, 9], "4": [0, 2, 3, 6, 7, 9], "note": [0, 1, 2, 3, 5, 6, 9], "If": [0, 1, 2, 3, 5, 6], "undirect": [0, 1, 2, 6, 9], "all": [0, 2, 3, 6, 7, 9], "To": [0, 1, 2, 3, 5, 9], "need": [0, 1, 2, 3, 5, 6, 9], "slight": 0, "modif": 0, "remain": [0, 5], "x": [0, 6, 7, 9], "y": [0, 7], "The": [0, 2, 3, 5, 6, 7, 9, 10], "union": 0, "taken": [0, 3], "degree_assortativity_coeffici": [0, 6], "degree_pearson_correlation_coeffici": [0, 6], "latter": 0, "function": [0, 1, 6, 7, 8], "scipi": [0, 6, 7], "stat": [0, 6, 7], "pearsonr": [0, 6], "make": [0, 6, 7, 9], "potent": 0, "faster": [0, 6], "matplotlib": [0, 1, 3, 5, 6, 7, 9], "inlin": [0, 1, 6, 7], "import": [0, 1, 2, 3, 5, 6, 7, 9], "nx": [0, 1, 2, 3, 5, 6, 7, 9], "pyplot": [0, 1, 3, 5, 6, 7, 9], "plt": [0, 1, 3, 5, 6, 7, 9], "pickl": 0, "copi": [0, 3], "random": [0, 6, 9], "warn": 0, "filterwarn": 0, "ignor": [0, 6], "illustr": 0, "how": [0, 1, 3, 6, 7, 9], "chang": [0, 9], "gname": 0, "g2": 0, "load": [0, 1, 3, 6, 7], "graph": [0, 2, 4, 10], "g": [0, 1, 2, 3, 6, 7, 9], "read_graphml": [0, 1], "f": [0, 1, 2, 3, 5, 7], "data": [0, 1, 2, 3, 6, 7], "graphml": [0, 1], "open": [0, 3, 7], "pos_": 0, "rb": 0, "fp": 0, "po": [0, 2, 3, 5, 6, 7, 9], "fig": [0, 3, 6, 7], "ax": [0, 3, 6, 7], "subplot": [0, 3, 6, 7], "figsiz": [0, 1, 3, 5, 6, 7, 9], "20": [0, 3, 6, 7, 9], "color": [0, 3, 6, 8], "label": [0, 2, 3, 6, 9], "cluster": 0, "num_prop": 0, "node_color": [0, 1, 2, 3, 5, 6, 7, 9], "orang": [0, 3, 9], "k5": 0, "els": [0, 1, 2, 3, 5], "cyan": 0, "node_label": 0, "rang": [0, 3, 6, 7, 9], "8": [0, 1, 2, 3, 6, 7, 9], "_": [0, 2, 6, 9], "wrt": 0, "proeprti": 0, "cr": 0, "r_in_out": 0, "nr": 0, "draw": [0, 2, 3, 5, 6, 9], "draw_networkx_nod": [0, 2, 3, 7], "node_s": [0, 1, 2, 3, 5, 6, 7, 9], "300": [0, 2], "draw_networkx_label": [0, 2, 3], "draw_networkx_edg": [0, 2, 3, 6, 7, 9], "edge_color": [0, 3, 6, 7, 9], "7": [0, 2, 7, 9], "set_titl": [0, 3, 6, 7], "3": [0, 3, 6, 7, 9], "nnumer": 0, "size": [0, 3, 6], "15": [0, 3, 6, 7], "tight_layout": [0, 3, 7], "observ": [0, 2, 3, 5], "initi": [0, 3, 6], "left": [0, 1], "side": [0, 9], "complet": [0, 1, 3, 6, 9], "complement": 0, "right": [0, 1, 10], "add": [0, 1, 3, 5], "between": [0, 1, 3, 7, 9], "non": [0, 1, 3, 6], "both": [0, 2, 3, 5, 6], "paramet": [0, 1, 7], "specifi": [0, 3, 5, 7], "whose": [0, 1, 6, 9], "consid": [0, 1, 3, 5, 6, 7, 9], "That": [0, 1, 6], "For": [0, 1, 2, 3, 5, 6, 7, 9], "atleast": 0, "one": [0, 2, 3, 5, 6, 9], "interpret": 0, "form": [0, 1, 6, 9, 10], "subgraph": [0, 3], "list": [0, 1, 3, 5, 6, 9], "th": 0, "pass": [0, 1, 6], "none": [0, 2, 3, 5, 7], "mean": [0, 2, 3, 6, 9], "nodes_list": 0, "str": 0, "5": [0, 1, 2, 3, 5, 6, 9], "10": [0, 3, 6, 7], "16": [0, 3, 5, 9], "def": [0, 1, 2, 3, 5, 9], "color_nod": 0, "util": [0, 3, 7], "give": [0, 1, 3, 6], "return": [0, 1, 2, 3, 5, 6, 9], "85": 0, "ad": [0, 2, 3, 6, 7], "show": [0, 1, 3, 5, 6, 7, 9], "add_edg": [0, 2, 3], "zip": [0, 3, 7, 9], "ravel": [0, 3, 7], "nnode": 0, "450": 0, "font_siz": [0, 1, 3, 5], "edgelist": [0, 2, 3, 6, 9], "plot": [0, 6, 7, 9], "onli": [0, 1, 2, 3, 5, 6, 7, 9], "rest": [0, 9], "grai": [0, 9], "considerd": 0, "assortaivti": 0, "drawn": [0, 7], "newman": 0, "pattern": 0, "http": [0, 2, 3, 7], "doi": [0, 3, 7], "org": [0, 2, 3, 7], "1103": [0, 7], "physrev": [0, 7], "67": 0, "026126": 0, "foster": 0, "d": [0, 1, 2, 6, 7], "grassberg": 0, "paczuski": 0, "1073": 0, "pna": 0, "0912671107": 0, "explor": [1, 2, 5, 6, 7], "relat": [1, 6, 7], "dag": 1, "sometim": [1, 6], "call": [1, 2, 3, 5], "under": [1, 2, 5, 7], "understand": [1, 3, 6, 9], "what": [1, 2, 3, 9], "triangle_graph": 1, "from_edgelist": 1, "create_us": 1, "digraph": [1, 2, 3, 5], "draw_planar": 1, "with_label": [1, 2, 3, 5, 6, 9], "true": [1, 2, 3, 5, 6, 9], "1000": [1, 2, 6, 9], "ffff8f": 1, "width": [1, 6, 7, 9], "14": [1, 3, 5], "mathemat": [1, 9], "made": [1, 7], "up": [1, 3, 6, 7], "vertic": [1, 2, 7, 9], "often": [1, 6], "arc": 1, "direction": 1, "stand": 1, "contrast": [1, 6], "semant": 1, "notion": 1, "them": [1, 2, 3, 5, 6, 7], "idea": [1, 5], "further": [1, 6, 7], "being": [1, 3, 6, 7, 9], "you": [1, 2, 3, 5, 9, 10], "see": [1, 2, 3, 5, 6, 7, 9, 10], "action": 1, "clothing_graph": 1, "figur": [1, 3, 5, 6, 7, 9], "12": [1, 3, 7, 9], "dpi": 1, "150": 1, "arrows": [1, 3], "8000": 1, "linewidth": [1, 7], "fun": 1, "professor": 1, "bumstead": 1, "who": [1, 6], "ha": [1, 2, 6, 7], "routin": 1, "get": [1, 3, 5, 6, 9], "dress": 1, "morn": 1, "By": 1, "habit": 1, "don": [1, 2, 6], "certain": [1, 3], "garment": 1, "befor": [1, 2, 3, 5], "sock": 1, "shoe": 1, "item": [1, 3, 6, 7], "put": 1, "pant": 1, "A": [1, 2, 4, 5, 6, 8, 9], "indic": [1, 3, 6, 7], "must": [1, 2, 3, 6], "is_directed_acyclic_graph": [1, 5], "fals": [1, 2, 3, 6], "find_cycl": 1, "represent": [1, 6], "partial": [1, 9], "mani": [1, 2, 3, 6, 7, 9], "schedul": 1, "system": [1, 7], "task": 1, "constraint": [1, 3, 9], "an": [1, 2, 3, 5, 6, 7, 9], "class": 1, "problem": 1, "concern": [1, 6], "collect": [1, 2, 3, 7], "object": [1, 9], "updat": [1, 7], "cell": [1, 9], "spreadsheet": 1, "after": [1, 3, 6, 9], "been": [1, 6, 7], "identifi": [1, 6], "file": 1, "softwar": 1, "sourc": [1, 2, 3, 5, 6], "context": 1, "depend": [1, 2, 3, 7], "vertex": [1, 2, 9], "whenev": 1, "earlier": [1, 3], "than": [1, 2, 3, 6, 7, 9], "circular": [1, 9], "gener": [1, 5, 6, 9, 10], "allow": [1, 2, 3, 7], "wai": [1, 3, 6, 9], "consist": [1, 2, 6, 7, 9], "involv": [1, 6], "without": [1, 2, 9], "process": [1, 6, 9], "element": [1, 7], "enter": 1, "incom": 1, "leav": [1, 3], "outgo": [1, 5], "instanc": 1, "electron": 1, "circuit": 1, "design": [1, 6], "static": 1, "logic": [1, 2, 9], "block": [1, 9], "gate": 1, "comput": [1, 3, 6], "input": [1, 2, 7], "output": [1, 3], "individu": [1, 9], "bit": 1, "anoth": [1, 2, 5, 6, 9], "follow": [1, 2, 3, 5, 6, 7, 9, 10], "those": [1, 3, 6], "never": 1, "loop": 1, "arrang": 1, "linear": 1, "introduc": [1, 3, 5, 7], "topological_sort": 1, "undershort": 1, "shirt": 1, "watch": 1, "tie": 1, "belt": 1, "jacket": 1, "canon": 1, "sequenc": [1, 2], "job": 1, "start": [1, 2, 3, 5, 6], "wash": 1, "cloth": 1, "machin": 1, "finish": 1, "dryer": 1, "perform": [1, 3, 6], "wa": [1, 2, 3], "studi": [1, 7], "earli": 1, "1960": 1, "pert": 1, "techniqu": [1, 4], "project": [1, 7], "manag": 1, "mileston": 1, "basi": 1, "find": [1, 3, 6], "critic": 1, "path": [1, 5, 6], "control": [1, 6], "length": [1, 2, 6], "overal": [1, 6], "scienc": [1, 3], "aris": [1, 6], "instruct": 1, "formula": [1, 6], "evalu": [1, 6, 7], "recomput": 1, "synthesi": 1, "determin": [1, 2, 5, 6, 7], "compil": 1, "makefil": 1, "serial": 1, "resolv": 1, "symbol": 1, "linker": 1, "decid": [1, 6], "tabl": 1, "foreign": 1, "kei": [1, 3, 6, 7], "databas": 1, "contain": [1, 6, 9], "appear": [1, 2, 5], "worth": 1, "possibl": [1, 2, 3, 6, 9], "view": [1, 6, 9], "along": [1, 3, 10], "horizont": 1, "line": [1, 2], "so": [1, 2, 3, 6, 9, 10], "briefli": [1, 2], "node": [1, 2, 3, 4, 6, 7, 9], "insert": 1, "least": [1, 3, 5, 9], "exist": [1, 5, 6, 7, 9], "empti": [1, 9], "l": [1, 3, 7, 9], "while": [1, 2, 3, 5, 6], "do": [1, 2, 3, 5, 6, 7, 9], "remov": [1, 2], "error": 1, "stratifi": 1, "satisfi": [1, 2, 3, 9], "previou": [1, 2, 3, 6], "word": [1, 6], "doe": [1, 2, 6, 7], "repeat": [1, 3, 6], "creat": [1, 6, 8, 9], "new": [1, 3, 5, 6], "thu": [1, 2, 5, 6, 9], "reduc": [1, 3, 6, 7], "correctli": 1, "procedur": 1, "topological_gener": 1, "sinc": [1, 2, 3, 6, 7], "interest": [1, 3, 6, 8], "preserv": 1, "instead": [1, 6, 9], "decreas": [1, 7], "correspond": [1, 6], "therefor": [1, 2], "save": [1, 6], "separ": [1, 9], "dictionari": [1, 7], "indegree_map": 1, "in_degre": [1, 2], "At": [1, 2], "seek": 1, "degre": [1, 2, 9], "zero": [1, 2, 3, 6], "prepar": 1, "zero_indegre": 1, "hous": 1, "insid": [1, 2, 6], "this_gener": 1, "current": 1, "variabl": [1, 6], "store": [1, 5, 6], "zero_degre": 1, "some": [1, 2, 3, 4, 5, 6, 7, 9], "result": [1, 3, 5, 6], "yield": 1, "child": [1, 5], "neighbor": [1, 2, 3, 6], "append": [1, 2, 3, 9], "del": 1, "still": [1, 2, 7], "rais": [1, 3, 5, 7], "networkxunfeas": 1, "slightli": 1, "modifi": [1, 9], "firstli": [1, 6], "is_multigraph": 1, "replac": 1, "len": [1, 5, 6, 9], "could": [1, 6], "run": [1, 3, 5, 10], "just": [1, 6, 9], "runtimeerror": 1, "try": [1, 3, 6, 9], "except": [1, 2, 3], "keyerror": 1, "inspect": [1, 6], "print": [1, 3, 6, 7], "getsourc": 1, "ancestor": [1, 4], "guarante": [1, 7, 9], "descend": [1, 5], "earliest": 1, "belong": [1, 2, 6, 9], "networkxerror": [1, 5], "exc": 1, "dg": 1, "resid": 1, "max": [1, 3, 6], "distanc": [1, 6, 7], "farthest": [1, 5], "leaf": 1, "obtain": [1, 7], "enumer": 1, "is_direct": [1, 2], "err": 1, "beauti": 2, "old": 2, "town": 2, "famou": 2, "either": [2, 5, 9], "larg": [2, 3, 6], "island": 2, "kneiphof": 2, "loms": 2, "mainland": 2, "portion": 2, "citi": [2, 7], "gave": 2, "fame": 2, "question": 2, "ask": 2, "mathematician": 2, "leonhard": 2, "almost": [2, 6], "year": 2, "ago": 2, "walk": 2, "visit": 2, "mass": 2, "cross": 2, "onc": [2, 3, 5, 6, 9], "neg": [2, 6], "resolut": 2, "laid": 2, "foundat": 2, "clear": [2, 6], "should": [2, 3], "first": [2, 3, 5, 6], "simplifi": 2, "map": [2, 3, 6, 9], "littl": [2, 9], "choic": 2, "rout": 2, "land": 2, "irrelev": 2, "thing": [2, 3], "matter": 2, "even": [2, 3, 6, 7], "blue": [2, 9], "c": [2, 3, 6, 9], "posit": [2, 3, 6, 7], "500": [2, 3], "arrowstyl": 2, "connectionstyl": [2, 3], "arc3": [2, 3], "rad": [2, 3], "paraphras": 2, "lift": 2, "your": [2, 3], "pen": 2, "end": 2, "circl": [2, 6], "everi": [2, 5, 6, 9], "capit": 2, "letter": 2, "lowercas": 2, "edge_label": [2, 3], "get_edge_attribut": 2, "font_color": [2, 3, 5], "draw_networkx_edge_label": [2, 3], "label_po": [2, 3], "he": 2, "describ": [2, 3, 6], "hi": [2, 6], "our": [2, 3, 5, 6, 7, 9], "travel": 2, "ab": [2, 3, 7], "abd": 2, "sequenti": 2, "state": 2, "fact": [2, 6], "exactli": [2, 7], "9": [2, 3, 6, 7, 9], "obviou": 2, "cannot": [2, 6], "condit": [2, 7], "conclud": 2, "appli": [2, 3, 7], "odd": 2, "sever": [2, 3, 6], "These": [2, 6, 7], "is_eulerian": 2, "whether": [2, 3], "eulerian_circuit": 2, "transform": [2, 3], "is_semieulerian": 2, "has_eulerian_path": 2, "eulerian_path": 2, "part": [2, 6, 7, 9], "explain": [2, 6], "isol": 2, "quit": [2, 6], "simpl": [2, 5, 7], "strongli": [2, 3], "equal": [2, 3, 7], "white": [2, 5, 9], "darkorang": 2, "out_degre": 2, "is_strongly_connect": 2, "is_connect": 2, "stack": [2, 9], "keep": 2, "push": [2, 3], "iter": [2, 3, 5, 6], "pop": 2, "choos": 2, "chosen": 2, "out_edg": 2, "vertex_stack": 2, "last_vertex": 2, "current_vertex": 2, "break": [2, 3, 5], "next_vertex": 2, "next": [2, 5, 6, 7], "remove_edg": 2, "check": [2, 6, 9], "rememb": [2, 3, 5], "semi_eulerian": 2, "might": [2, 5, 6, 9], "singl": [2, 5], "compon": [2, 6, 7], "given": [2, 3, 5, 9], "user": [2, 6], "otherwis": [2, 7], "most": [2, 6, 7], "underli": 2, "weakli": 2, "ins": 2, "unbalanced_in": 2, "unbalanced_out": 2, "elif": [2, 3, 5], "is_weakly_connect": 2, "alreadi": [2, 3, 5, 6, 9], "simpli": [2, 6, 9], "reason": 2, "expect": [2, 5, 6], "neither": [2, 6], "nor": [2, 6], "section": [2, 3, 5, 7], "wheel": 2, "wheel_graph": 2, "6": [2, 3, 5, 6, 7, 9], "green": [2, 6, 9], "answer": [2, 3], "No": 2, "center": [2, 6], "essenti": 2, "anyon": 2, "anyth": 2, "real": [2, 3, 6, 7], "applic": [2, 4, 7, 10], "solv": [2, 3, 9], "complex": [2, 7], "konigsberg": 2, "mail": 2, "carrier": 2, "retrac": 2, "step": [2, 3], "painter": 2, "garbag": 2, "airplan": 2, "pilot": 2, "gp": [2, 7], "develop": [2, 10], "googl": 2, "en": 2, "wikipedia": [2, 5, 9], "wiki": 2, "seven_bridges_of_k\u00f6nigsberg": 2, "solutio": 2, "problemati": 2, "geometriam": 2, "situ": 2, "pertinenti": 2, "1741": 2, "enestr\u00f6m": 2, "53": 2, "maa": 2, "archiv": 2, "notebook": [3, 5, 6, 10], "dinitz_alg": 3, "numpi": [3, 6, 7, 9], "np": [3, 6, 7, 9], "pil": 3, "math": [3, 7], "deepcopi": 3, "dequ": 3, "want": [3, 6, 9], "send": 3, "friend": [3, 6], "soon": 3, "commun": [3, 10], "peer": 3, "about": [3, 6, 9], "limit": [3, 6], "per": 3, "second": 3, "pair": [3, 5, 6, 7, 9], "exampl": [3, 6, 9, 10], "read_gml": 3, "example_graph": 3, "gml": 3, "extract": [3, 6, 7], "info": [3, 7], "visual": [3, 5, 7, 9], "asarrai": [3, 9], "min_source_margin": 3, "min_target_margin": 3, "set_xlim": 3, "off": [3, 6], "spruce": 3, "imag": [3, 6], "icon": [3, 10], "tr_figur": 3, "transdata": 3, "tr_ax": 3, "transfigur": 3, "invert": 3, "icon_s": 3, "diff": 3, "get_xlim": 3, "015": 3, "icon_cent": 3, "computer_black_144x144": 3, "png": 3, "xf": 3, "yf": 3, "xa": 3, "ya": 3, "imshow": 3, "shall": 3, "plan": 3, "packet": 3, "amount": 3, "divid": [3, 6], "small": 3, "across": 3, "receiv": [3, 9], "abl": 3, "rearrang": 3, "reconstruct": 3, "origin": [3, 7], "model": [3, 8], "term": [3, 5, 6, 9], "uv": 3, "There": [3, 6, 9], "special": 3, "sink": 3, "skyblu": 3, "lightgrai": 3, "c_": 3, "ahead": 3, "mathbb": 3, "rate": [3, 7], "valid": [3, 5], "shouldn": 3, "exce": [3, 7], "f_": 3, "le": 3, "conserv": 3, "sent": 3, "backslash": 3, "check_valid_flow": 3, "source_nod": 3, "target_nod": 3, "h": 3, "add_edges_from": [3, 5], "edgecolor": 3, "red": [3, 6], "invalid": 3, "violat": 3, "incoming_flow": 3, "predecessor": 3, "outgoing_flow": 3, "o": [3, 5, 7], "successor": [3, 5], "isclos": 3, "visualize_flow": 3, "flow_graph": 3, "funcion": 3, "full": 3, "lightgrei": 3, "top": [3, 6, 9, 10], "flow_nc": 3, "flow_ec": 3, "black": [3, 6], "lbl": 3, "example_flow": 3, "30": 3, "25": [3, 6], "dont": 3, "goal": [3, 10], "maxim": 3, "work": 3, "g_": 3, "residual_graph": 3, "valueerror": 3, "has_edg": 3, "etyp": 3, "rev": 3, "draw_residual_graph": 3, "categor": 3, "were": [3, 6, 9], "orig_edg": 3, "zero_edg": 3, "rev_edg": 3, "goldenrod": 3, "style": 3, "rv": 3, "fwd_cap": 3, "rev_cap": 3, "667": 3, "shown": [3, 6], "vu": 3, "bf": 3, "level_color": 3, "aqua": 3, "lightgreen": 3, "yellow": 3, "lightpink": 3, "violet": 3, "level_bf": 3, "construct": [3, 5, 6, 7], "parent": 3, "queue": 3, "popleft": 3, "draw_level_network": 3, "background": 3, "nodelist": 3, "level_nc": 3, "fwd_edg": 3, "ec": 3, "reachabl": 3, "alpha": 3, "minimum": [3, 6], "min": 3, "And": 3, "df": 3, "aug_path_df": 3, "build": [3, 6], "pred": 3, "found": [3, 6], "min_resid_flow": 3, "nc": 3, "el": 3, "pairwis": 3, "edgelabel": 3, "aug_flow": 3, "aug_path": 3, "gca": 3, "scheme": 3, "plai": [3, 6, 7], "role": [3, 6, 7], "summar": [3, 7], "point": [3, 9], "decompos": 3, "smaller": 3, "better": [3, 6, 7], "whole": [3, 6], "practic": [3, 10], "howev": [3, 6], "yourself": [3, 10], "provid": [3, 4, 7, 8, 9, 10], "includ": [3, 6, 7, 10], "featur": 3, "cutoff": 3, "keyword": 3, "argument": [3, 5, 6], "prematur": 3, "termin": 3, "desir": 3, "reach": [3, 5, 6], "algorith": 3, "cutoff_list": 3, "35": [3, 6], "flow_valu": 3, "22": [3, 6], "stop": 3, "far": [3, 6], "bipartit": 3, "match": 3, "transport": [3, 7], "though": [3, 6, 7], "2m": 3, "polynomi": 3, "doesn": 3, "noteworthi": 3, "especi": 3, "fast": 3, "sqrt": 3, "ship": 3, "packag": [3, 7], "warehous": 3, "custom": [3, 7], "intermedi": 3, "dai": 3, "intermdi": 3, "lw1": 3, "lw2": 3, "lw3": 3, "c1": 3, "c2": 3, "c20": 3, "shipping_graph": 3, "800": 3, "maximum_ship": 3, "pseudo": 3, "ultim": 3, "ci": 3, "lwi": 3, "useless": 3, "transfer": 3, "shipment": 3, "add_nod": 3, "arrai": [3, 6], "97": 3, "21": 3, "400": 3, "titl": [3, 6, 7], "version": [3, 5], "2006": 3, "yefim": 3, "theoret": [3, 7, 9], "lectur": 3, "volum": 3, "3895": 3, "pp": 3, "218": 3, "240": 3, "1007": 3, "11685654_10": 3, "closer": [4, 6, 8], "analysi": [4, 10], "assort": 4, "coeffici": [4, 6], "correl": [4, 6], "measur": 4, "acycl": [4, 5], "topolog": 4, "sort": [4, 6, 9], "dinitz": 4, "lowest": 4, "common": [4, 6, 7, 10], "euler": 4, "lowest_common_ancestor": 5, "overview": [5, 7], "read": 5, "articl": [5, 7], "reader": 5, "familiar": 5, "api": 5, "introductori": 5, "concept": 5, "root": 5, "tree": 5, "deepest": 5, "alwai": 5, "good": 5, "learn": [5, 7, 9, 10], "evolutionari": 5, "relationship": [5, 7], "nx_agraph": 5, "graphviz_layout": 5, "itertool": [5, 9], "chain": 5, "count": [5, 6], "combinations_with_replac": 5, "vertabr": 5, "lamprei": 5, "jaw": 5, "sunfish": 5, "tetrapod": 5, "newt": 5, "amniot": 5, "lizard": 5, "mammal": 5, "bear": 5, "chimpanze": 5, "prog": 5, "dot": 5, "4000": [5, 6], "brown": 5, "11": [5, 7], "among": [5, 6], "awai": [5, 6], "itself": [5, 6], "naiv": 5, "naive_all_pairs_lowest_common_ancestor": 5, "lca": 5, "networkxpointlessconcept": 5, "meaningless": 5, "null": 5, "unord": 5, "default": [5, 6, 7], "dict": [5, 6, 9], "fromkei": 5, "nodeset": 5, "nodenotfound": 5, "done": 5, "inform": [5, 6, 9], "cach": 5, "ancestor_cach": 5, "common_ancestor": 5, "arbitrari": [5, 7], "until": 5, "assum": [5, 7], "wish": 5, "all_pairs_lowest_common_ancestor": 5, "method": [5, 6], "1500": 5, "darkgreen": 5, "worst": 5, "domin": 5, "social": [6, 7], "mainli": 6, "execut": 6, "librari": 6, "detail": 6, "ten": 6, "peopl": 6, "examin": [6, 10], "scrutin": 6, "kind": [6, 9], "valuabl": 6, "dataset": [6, 7], "stanford": 6, "websit": 6, "moreov": 6, "known": 6, "becom": 6, "perspect": 6, "anonym": 6, "friendship": 6, "particular": 6, "107": 6, "348": 6, "414": 6, "686": 6, "698": 6, "1684": 6, "1912": 6, "3437": 6, "3980": 6, "ones": 6, "spotlight": 6, "necessari": 6, "panda": 6, "pd": 6, "randint": 6, "folder": 6, "datafram": 6, "row": [6, 9], "start_nod": 6, "end_nod": 6, "column": [6, 9], "read_csv": 6, "facebook_combin": 6, "txt": 6, "gz": 6, "compress": 6, "gzip": 6, "sep": 6, "88229": 6, "4026": 6, "4030": 6, "88230": 6, "4027": 6, "4031": 6, "88231": 6, "4032": 6, "88232": 6, "4038": 6, "88233": 6, "88234": 6, "from_pandas_edgelist": 6, "exploratori": 6, "help": 6, "qualit": 6, "feel": 6, "sens": 6, "random_layout": 6, "fastest": 6, "layout": [6, 9], "plot_opt": 6, "draw_networkx": 6, "veri": 6, "colloqui": 6, "hairbal": 6, "due": 6, "overlap": 6, "entangl": 6, "mess": 6, "impos": 6, "spring_layout": 6, "modul": 6, "advantag": 6, "account": 6, "locat": [6, 7], "downsid": 6, "much": 6, "computation": 6, "expens": 6, "slow": 6, "100": 6, "80k": 6, "futur": 6, "seed": 6, "1721": 6, "glean": 6, "seem": [6, 7], "highli": 6, "serv": 6, "revisit": 6, "later": 6, "number_of_nod": 6, "4039": 6, "number_of_edg": [6, 7], "averag": 6, "seen": 6, "44": 6, "43": 6, "69101262688784": 6, "distribut": [6, 7], "diamet": 6, "longest": 6, "shortest": 6, "similarli": 6, "travers": 6, "average_shortest_path_length": 6, "analys": 6, "requir": 6, "re": 6, "reus": 6, "shortest_path_length": 6, "all_pairs_shortest_path_length": 6, "inner": 6, "42": 6, "carefulli": [6, 9], "docstr": 6, "equival": 6, "maximum": [6, 7], "eccentr": 6, "turn": 6, "sp": 6, "pre": [6, 9], "extra": 6, "effici": 6, "fewer": 6, "again": 6, "directli": 6, "ve": 6, "average_path_length": 6, "spl": 6, "691592636562027": 6, "roughli": 6, "captur": 6, "metric": [6, 7], "moment": 6, "know": [6, 9], "path_length": 6, "dtype": 6, "int": 6, "frequenc": 6, "pl": 6, "cnt": 6, "uniqu": [6, 7, 9], "return_count": 6, "express": 6, "percentag": 6, "freq_perc": 6, "bar": 6, "arang": 6, "height": 6, "fontdict": 6, "loc": [6, 7], "set_xlabel": 6, "set_ylabel": 6, "text": 6, "major": 6, "long": [6, 10], "unlik": 6, "likelihood": 6, "less": 6, "densiti": 6, "clearli": 6, "spars": 6, "010819963503439287": 6, "giant": 6, "compoen": 6, "number_connected_compon": 6, "score": 6, "link": 6, "held": 6, "higher": 6, "fraction": 6, "highest": 6, "togeth": 6, "degree_centr": 6, "lambda": [6, 7], "revers": 6, "258791480931154": 6, "1961367013372957": 6, "18697374938088163": 6, "13546310054482416": 6, "08593363051015354": 6, "2543": 6, "07280832095096582": 6, "2347": 6, "07206537890044576": 6, "1888": 6, "0629024269440317": 6, "259": 6, "around": 6, "26": 6, "high": [6, 9, 10], "investig": 6, "three": [6, 7, 9], "popular": [6, 9], "apart": [6, 7], "1045": 6, "792": 6, "755": 6, "547": 6, "347": 6, "294": 6, "291": 6, "254": 6, "750": 6, "lastli": 6, "290": 6, "hist": 6, "bin": 6, "xtick": 6, "tick": 6, "025": 6, "05": 6, "histogram": 6, "xlabel": 6, "ylabel": 6, "visibl": 6, "vast": 6, "0125": 6, "actual": 6, "obvious": 6, "plenti": 6, "extrem": 6, "low": [6, 9], "interconnect": 6, "nice": 6, "9991880235075951": 6, "1078363832831382": 6, "164599134027958": 6, "7322099342942238": 6, "li": 6, "act": 6, "associ": 6, "abil": [6, 7], "influenc": [6, 7], "convei": 6, "post": 6, "share": [6, 7], "via": 6, "betwe": 6, "betweenness_centr": 6, "4805180785560152": 6, "3377974497301992": 6, "23611535735892905": 6, "2292953395868782": 6, "1085": 6, "14901509211665306": 6, "14630592147442917": 6, "11533045020560802": 6, "567": 6, "09631033121856215": 6, "48": 6, "half": 6, "combin": [6, 9], "knowledg": 6, "spread": 6, "middleman": 6, "move": 6, "02": 6, "01": [6, 7], "34": 6, "1200": 6, "monitor": 6, "fake": 6, "virus": 6, "malici": 6, "gain": 6, "missinform": 6, "quickest": 6, "slower": 6, "closeness_centr": 6, "45969945355191255": 6, "58": 6, "3974018305284913": 6, "428": 6, "3948371956585509": 6, "563": 6, "3939127889961955": 6, "39360561458231796": 6, "171": 6, "37049270575282134": 6, "36991572004397216": 6, "483": 6, "3698479575013739": 6, "huge": 6, "gap": 6, "easili": 6, "1753343239227343": 6, "hop": 6, "furthermor": 6, "60": 6, "variou": [6, 7], "17": [6, 9], "46": 6, "rel": 6, "50": [6, 7], "themselv": [6, 7], "eigenvector_centr": 6, "09540696149067629": 6, "2266": 6, "08698327767886552": 6, "2206": 6, "08605239270584342": 6, "2233": 6, "08517340912756598": 6, "2464": 6, "08427877475676092": 6, "2142": 6, "08419311897991796": 6, "2218": 6, "0841557356805503": 6, "2078": 6, "08413617041724979": 6, "2123": 6, "08367141238206226": 6, "1993": 6, "0835324284081597": 6, "095": 6, "sure": 6, "influenci": 6, "83": 6, "87": 6, "heighest": 6, "lead": 6, "conclus": 6, "hypothesi": 6, "correct": 6, "high_eigenvector_centr": 6, "2nd": 6, "10th": 6, "high_eigenvector_nod": 6, "tupl": 6, "neighbors_1912": 6, "04": 6, "06": 6, "08": 6, "005": 6, "tini": 6, "probabl": [6, 7], "randomli": 6, "select": 6, "sign": 6, "triadic": 6, "closur": 6, "triangl": 6, "usual": [6, 9], "average_clust": 6, "6055467186200876": 6, "displai": 6, "showcas": 6, "hundr": 6, "fifti": 6, "triangles_per_nod": 6, "1612010": 6, "1197": 6, "3334983906907": 6, "great": 6, "median": 6, "161": 6, "few": 6, "wherea": 6, "plethora": 6, "increas": [6, 7], "goe": 6, "mutual": 6, "suggest": 6, "latent": 6, "stress": 6, "tension": 6, "join": 6, "delet": 6, "caus": 6, "lie": 6, "has_bridg": 6, "75": 6, "local": [6, 10], "endpoint": 6, "importantli": 6, "local_bridg": 6, "with_span": 6, "78": 6, "lawngreen": 6, "prefer": 6, "attach": 6, "06357722918564943": 6, "potenti": [6, 7], "06357722918564918": 6, "064": 6, "her": 6, "group": [6, 9], "detect": 6, "semi": 6, "synchron": 6, "propag": 6, "counter": 6, "com": 6, "label_propagation_commun": 6, "06x": 6, "0xffffff": 6, "rgb": 6, "fill": [6, 9], "depict": 6, "asynchron": 6, "fluid": 6, "With": [6, 7], "asyn_fluidc": 6, "cambridg": 6, "intellig": 6, "world": 7, "parameter": 7, "constrain": 7, "produc": 7, "infrastructur": 7, "electr": 7, "telecommun": 7, "own": 7, "synapt": 7, "embed": 7, "physic": 7, "space": 7, "framework": 7, "spacial": 7, "incorpor": 7, "dictat": 7, "typic": 7, "euclidean": 7, "dimens": 7, "intuit": 7, "propos": 7, "cost": 7, "wide": 7, "varieti": 7, "substaini": 7, "research": 7, "proof": 7, "2010": 7, "review": 7, "marc": 7, "barth\u00e9lemi": 7, "comprehens": 7, "field": 7, "classifi": 7, "radiu": 7, "neq": 7, "p_dist": 7, "uniformli": 7, "onto": 7, "unit": 7, "squar": 7, "sampl": [7, 9], "minkowski": 7, "dimension": 7, "rgg": 7, "coordin": 7, "box": [7, 9], "within": [7, 9], "fulli": 7, "disk": 7, "hoc": 7, "wireless": 7, "leq": 7, "erd\u0151": 7, "r\u00e9nyi": 7, "probabilii": 7, "exponenti": 7, "tune": 7, "beta": 7, "shape": 7, "character": 7, "controversi": 7, "commonli": 7, "famili": 7, "orgin": 7, "power": 7, "law": 7, "propto": 7, "adjac": [7, 9], "geometri": 7, "w_i": 7, "w_j": 7, "geq": 7, "product": 7, "greater": 7, "recent": 7, "extent": 7, "coupl": 7, "proxim": 7, "necessarili": 7, "disconnect": 7, "textrm": 7, "extend": 7, "suffici": 7, "tesla": 7, "north": 7, "american": 7, "supercharg": 7, "highlight": [7, 10], "filter": 7, "canadian": 7, "385": 7, "april": 7, "2017": 7, "nest": 7, "geohash": 7, "convert": 7, "popul": 7, "percent": 7, "mpl_param": 7, "titles": 7, "rcparam": 7, "readwrit": 7, "json_graph": 7, "json": 7, "ed": 7, "datafil": 7, "tesla_network": 7, "infil": 7, "node_link_graph": 7, "cord": 7, "dr7k46ycwwb8": 7, "sc_index": 7, "173": 7, "00014093906625032375": 7, "gps_lon_lat": 7, "74": 7, "07126104459167": 7, "41": 7, "49977498687804": 7, "lat": 7, "lon": 7, "28101": 7, "8123107474668945": 7, "42622282744786055": 7, "attribut": 7, "get_node_attribut": 7, "lot": 7, "node_opt": 7, "edge_opt": 7, "impact": 7, "param": 7, "radii": 7, "lw": 7, "random_geometric_graph": 7, "promin": 7, "gtg": 7, "dist": 7, "distance_metr": 7, "geographical_threshold_graph": 7, "norm": [7, 9], "exp": 7, "scale": 7, "pdf": 7, "srgg": 7, "10d": 7, "soft_random_geometric_graph": 7, "trgg": 7, "0001": 7, "001": 7, "thresh": 7, "thresholded_random_geometric_graph": 7, "1016": 7, "physrep": 7, "002": 7, "66": 7, "016121": 7, "0012": 7, "365x": 7, "90": 7, "90358": 7, "1109": 7, "49": 7, "12889": 7, "37236": 7, "219": 7, "71": 7, "036108": 7, "1214": 7, "aap1110": 7, "hdl": 7, "handl": 7, "net": 7, "2117": 7, "111425": 7, "geometr": 8, "sudoku": 8, "placement": 9, "puzzl": 9, "combinator": 9, "grid": 9, "digit": 9, "nine": 9, "subgrid": 9, "compos": 9, "solut": 9, "cue": 9, "81": 9, "frame": 9, "treat": 9, "ensur": 9, "blank": 9, "precolor": 9, "extens": 9, "integr": 9, "caylei": 9, "translat": 9, "clue": 9, "contraint": 9, "encod": 9, "miss": 9, "formal": 9, "rank": 9, "x_n": 9, "disjoint": 9, "gx_n": 9, "regular": 9, "3n": 9, "2n": 9, "810": 9, "verifi": 9, "leftov": 9, "henc": 9, "cool": 9, "mpl": 9, "sudoku_graph": 9, "flatten": 9, "grid_2d_graph": 9, "colormap": 9, "vmin": 9, "vmax": 9, "clip": 9, "mapper": 9, "cm": 9, "scalarmapp": 9, "cmap": 9, "pastel1": 9, "to_rgba": 9, "greedi": 9, "hard": 9, "level": 9, "brute": 9, "forc": 9, "chromat": 9, "distant": 9, "generate_random_sudoku": 9, "_pattern": 9, "rbase": 9, "col": 9, "num": 9, "board": 9, "starter": 9, "differenti": 9, "quick": 9, "uncolor": 9, "unlabel": 9, "80": 9, "separate_edg": 9, "box_edg": 9, "row_edg": 9, "column_edg": 9, "plot_edge_colored_sudoku": 9, "circular_layout": 9, "tab": 9, "alright": 9, "invis": 9, "fall": 9, "pretti": 9, "site": 10, "educ": 10, "materi": 10, "offici": 10, "curat": 10, "repositori": 10, "qualiti": 10, "resourc": 10, "narr": 10, "document": 10, "depth": 10, "demonstr": 10, "domain": 10, "best": 10, "markdown": 10, "jupyt": 10, "everyth": 10, "interact": 10, "binder": 10, "click": 10, "launch": 10, "button": 10, "page": 10, "rocket": 10, "upper": 10, "corner": 10, "clone": 10, "octocat": 10, "facebook": 10}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"node": [0, 5], "assort": [0, 6], "coeffici": 0, "correl": 0, "measur": [0, 6], "mix": 0, "matrix": 0, "attribut": [0, 6], "numer": 0, "degre": [0, 6], "exampl": [0, 1, 2, 5, 7], "direct": 1, "acycl": 1, "graph": [1, 3, 5, 6, 7, 8, 9], "topolog": [1, 6], "sort": 1, "definit": [1, 5, 7], "applic": [1, 3], "kahn": 1, "": [1, 2, 3, 5], "algorithm": [1, 2, 3, 4, 5], "networkx": [1, 2, 3, 5], "implement": [1, 2, 5], "step": [1, 5], "1": [1, 2, 5], "initi": 1, "indegre": 1, "2": [1, 2, 5], "first": 1, "level": [1, 3, 5], "3": [1, 2, 5], "move": 1, "from": 1, "one": 1, "next": 1, "4": [1, 5], "check": [1, 5], "i": [1, 2, 5], "cycl": 1, "addendum": 1, "work": 1, "multigraph": 1, "well": 1, "The": 1, "mai": 1, "have": 1, "chang": 1, "dure": 1, "iter": 1, "combin": 1, "all": [1, 5], "euler": 2, "seven": 2, "bridg": [2, 6], "k\u00f6nigsberg": 2, "reformul": 2, "problem": [2, 3, 9], "abstract": 2, "term": 2, "method": 2, "gener": [2, 7, 8], "solut": 2, "eulerian": 2, "circuit": 2, "path": [2, 3], "everywher": 2, "refer": [2, 3, 6], "dinitz": 3, "its": 3, "maximum": 3, "flow": 3, "motiv": [3, 7], "formal": 3, "residu": 3, "capac": 3, "network": [3, 6, 7], "augment": 3, "reduct": 3, "lowest": 5, "common": 5, "ancestor": 5, "type": 5, "input": 5, "dag": 5, "find": 5, "g": 5, "which": 5, "locat": 5, "time": 5, "space": 5, "complex": 5, "facebook": 6, "analysi": 6, "visual": 6, "basic": 6, "central": 6, "between": 6, "close": 6, "eigenvector": 6, "cluster": 6, "effect": 6, "commun": 6, "geometr": 7, "model": 7, "spatial": 7, "individu": 7, "random": 7, "r": 7, "waxman": 7, "alpha": 7, "threshold": 7, "theta": 7, "geograph": 7, "p": 7, "d_": 7, "ij": 7, "soft": 7, "A": 7, "sudoku": 9, "color": 9, "introduct": 9, "intuit": 9, "build": 9, "formul": 9, "welcom": 10, "nx": 10, "guid": 10, "about": 10, "content": 10}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 57}, "alltitles": {"Node assortativity coefficients and correlation measures": [[0, "node-assortativity-coefficients-and-correlation-measures"]], "Assortativity": [[0, "assortativity"], [6, "assortativity"]], "Assortativity coefficients": [[0, "assortativity-coefficients"]], "Mixing matrix": [[0, "mixing-matrix"]], "Attribute Assortativity Coefficient": [[0, "attribute-assortativity-coefficient"]], "Numeric Assortativity Coefficient": [[0, "numeric-assortativity-coefficient"]], "Degree Assortativity Coefficient": [[0, "degree-assortativity-coefficient"]], "Example": [[0, "example"], [1, "example"], [1, "id1"], [1, "id3"], [5, "example"]], "Directed Acyclic Graphs & Topological Sort": [[1, "directed-acyclic-graphs-topological-sort"]], "Directed Graph": [[1, "directed-graph"]], "Definition": [[1, "definition"], [1, "id2"], [1, "id5"]], "Directed Acyclic Graph": [[1, "directed-acyclic-graph"]], "Applications": [[1, "applications"], [1, "id4"]], "Topological sort": [[1, "topological-sort"]], "Kahn\u2019s algorithm": [[1, "kahn-s-algorithm"]], "NetworkX implementation": [[1, "networkx-implementation"]], "Step 1. Initialize indegrees.": [[1, "step-1-initialize-indegrees"]], "Step 2. Initialize first level.": [[1, "step-2-initialize-first-level"]], "Step 3. Move from one level to the next.": [[1, "step-3-move-from-one-level-to-the-next"]], "Step 4. Check if there is a cycle in the graph.": [[1, "step-4-check-if-there-is-a-cycle-in-the-graph"]], "Addendum: Topological sort works on multigraphs as well.": [[1, "addendum-topological-sort-works-on-multigraphs-as-well"]], "Addendum: The graph may have changed during the iteration.": [[1, "addendum-the-graph-may-have-changed-during-the-iteration"]], "Combine all steps.": [[1, "combine-all-steps"]], "Euler\u2019s Algorithm": [[2, "euler-s-algorithm"]], "Seven Bridges of K\u00f6nigsberg": [[2, "seven-bridges-of-konigsberg"]], "Reformulating the Problem in Abstract Terms": [[2, "reformulating-the-problem-in-abstract-terms"]], "Euler\u2019s Method": [[2, "euler-s-method"]], "Generalizing Euler\u2019s Solution": [[2, "generalizing-euler-s-solution"]], "NetworkX Implementation of Euler\u2019s Algorithm": [[2, "networkx-implementation-of-euler-s-algorithm"]], "1. Eulerian Circuit Implementation": [[2, "eulerian-circuit-implementation"]], "2. Eulerian Path Implementation": [[2, "eulerian-path-implementation"]], "3. Examples": [[2, "examples"]], "Euler is everywhere!": [[2, "euler-is-everywhere"]], "References": [[2, "references"], [3, "references"], [6, "references"]], "Dinitz\u2019s algorithm and its applications": [[3, "dinitz-s-algorithm-and-its-applications"]], "Maximum flow problem": [[3, "maximum-flow-problem"]], "Motivation": [[3, "motivation"]], "Formalization": [[3, "formalization"]], "Dinitz\u2019s algorithm": [[3, "dinitz-s-algorithm"]], "Residual Capacity & Graph": [[3, "residual-capacity-graph"]], "Level Network": [[3, "level-network"]], "Augmenting Path & Flow": [[3, "augmenting-path-flow"]], "Algorithm": [[3, "algorithm"]], "Maximum flow in NetworkX": [[3, "maximum-flow-in-networkx"]], "Reductions and Applications": [[3, "reductions-and-applications"]], "Algorithms": [[4, "algorithms"]], "Lowest Common Ancestor": [[5, "lowest-common-ancestor"]], "Definitions": [[5, "definitions"]], "NetworkX\u2019s Implementation of Lowest Common Ancestor Algorithm": [[5, "networkx-s-implementation-of-lowest-common-ancestor-algorithm"]], "Step 1: Check if the type of input graph is DAG.": [[5, "step-1-check-if-the-type-of-input-graph-is-dag"]], "Step 2: Find ancestors of all nodes in G.": [[5, "step-2-find-ancestors-of-all-nodes-in-g"]], "Step 3: Find common ancestors": [[5, "step-3-find-common-ancestors"]], "Step 4: Find a node in common ancestors which is located at the lowest level in the graph.": [[5, "step-4-find-a-node-in-common-ancestors-which-is-located-at-the-lowest-level-in-the-graph"]], "Time & Space Complexity": [[5, "time-space-complexity"]], "Facebook Network Analysis": [[6, "facebook-network-analysis"]], "Visualizing the graph": [[6, "visualizing-the-graph"]], "Basic topological attributes": [[6, "basic-topological-attributes"]], "Centrality measures": [[6, "centrality-measures"]], "Degree Centrality": [[6, "degree-centrality"]], "Betweenness Centrality": [[6, "betweenness-centrality"]], "Closeness Centrality": [[6, "closeness-centrality"]], "Eigenvector Centrality": [[6, "eigenvector-centrality"]], "Clustering Effects": [[6, "clustering-effects"]], "Bridges": [[6, "bridges"]], "Network Communities": [[6, "network-communities"]], "Geometric Generator Models": [[7, "geometric-generator-models"]], "Geometric/Spatial Networks": [[7, "geometric-spatial-networks"]], "Individual Model Definitions": [[7, "individual-model-definitions"]], "Random Geometric Graphs (R)": [[7, "random-geometric-graphs-r"]], "Waxman Graphs (\\alpha)": [[7, "waxman-graphs-alpha"]], "Threshold Graphs (\\theta)": [[7, "threshold-graphs-theta"]], "Geographical Threshold Graphs (P(d_{ij}), \\theta)": [[7, "geographical-threshold-graphs-p-d-ij-theta"]], "Soft Random Geometric Graphs (R, P(d_{ij}))": [[7, "soft-random-geometric-graphs-r-p-d-ij"]], "Thresholded Random Geometric Graphs (R, \\theta)": [[7, "thresholded-random-geometric-graphs-r-theta"]], "A Motivating Example": [[7, "a-motivating-example"]], "Random Geometric Graphs": [[7, "random-geometric-graphs"]], "Geographical Threshold Graphs": [[7, "geographical-threshold-graphs"]], "Soft Random Geometric Graphs": [[7, "soft-random-geometric-graphs"]], "Thresholded Random Geometric Graphs": [[7, "thresholded-random-geometric-graphs"]], "Graph Generators": [[8, "graph-generators"]], "Sudoku and Graph coloring": [[9, "sudoku-and-graph-coloring"]], "Introduction and intuition building": [[9, "introduction-and-intuition-building"]], "Problem Formulation": [[9, "problem-formulation"]], "Welcome to nx-guides!": [[10, "welcome-to-nx-guides"]], "About": [[10, "about"]], "Contents": [[10, "contents"]]}, "indexentries": {}})