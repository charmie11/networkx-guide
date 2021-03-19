(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{90:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(7),o=(r(0),r(95)),i={id:"floyd-warshall",title:"Floyd-Warshall algorithm",sidebar_label:"Floyd-Warshall"},s={unversionedId:"algorithms/shortest-path/floyd-warshall",id:"algorithms/shortest-path/floyd-warshall",isDocsHomePage:!1,title:"Floyd-Warshall algorithm",description:"Floyd-Warshall algorithm is an algorithm for finding the shortest path between all the pairs of vertices in a weighted graph. The result of the algorithm is a list of lengths of shortest paths between all pairs of vertices.",source:"@site/docs/algorithms/shortest-path/floyd-warshall.md",slug:"/algorithms/shortest-path/floyd-warshall",permalink:"/algorithms/shortest-path/floyd-warshall",editUrl:"https://github.com/memgraph/networkx-guide/edit/main/docs/algorithms/shortest-path/floyd-warshall.md",version:"current",sidebar_label:"Floyd-Warshall",sidebar:"networkx_guide",previous:{title:"A* search algorithm",permalink:"/algorithms/shortest-path/a-star-search"},next:{title:"PageRank algorithm",permalink:"/algorithms/link-analysis/pagerank"}},l=[{value:"How does it work?",id:"how-does-it-work",children:[]},{value:"The difference from other shortest path algorithms",id:"the-difference-from-other-shortest-path-algorithms",children:[]},{value:"Pseudocode",id:"pseudocode",children:[]},{value:"Usage in NetworkX",id:"usage-in-networkx",children:[{value:"Method input",id:"method-input",children:[]},{value:"Method output",id:"method-output",children:[]},{value:"Example",id:"example",children:[]}]}],h={toc:l};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},h,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Floyd-Warshall algorithm is an algorithm for finding the shortest path between all the pairs of vertices in a weighted graph. The result of the algorithm is a list of lengths of shortest paths between all pairs of vertices. "),Object(o.b)("p",null,"The algorithm was first designed as an example for dynamic programming by Robert Floyd in 1962. The same year, Stephen Warshall published essentially the same algorithm, but as a graph example. As the algorithms were essentially the same, the algorithm got named after both authors."),Object(o.b)("h2",{id:"how-does-it-work"},"How does it work?"),Object(o.b)("p",null,"Floyd-Warshall algorithm creates a series of matrices with dimension n x n, where n is the number of nodes in the graph. Elements of the matrices are filled with distances from node i to node j. If there is no path between the two nodes, the element is put as infinity. "),Object(o.b)("p",null,"Each next matrix takes into account the node that is intermediate between the source node and the target node. Element of the matrix is filled if the sum of distance from source node to intermediate node and distance from intermediate node to target node is lower than the current distance. The algorithm is repeated as many times as there\u2019s nodes in the graph."),Object(o.b)("p",null,"The resulting matrix contains the length of the shortest path between each pair of nodes. "),Object(o.b)("h2",{id:"the-difference-from-other-shortest-path-algorithms"},"The difference from other shortest path algorithms"),Object(o.b)("p",null,"Floyd-Warshall algorithm can find lengths of the shortest paths between all pairs of vertices in a graph. The algorithm works with both directed and undirected graphs. It accepts both positive and negative values as weights. "),Object(o.b)("p",null,"Floyd-Warshall algorithm is used in solving many different problems such as finding the shortest path in a directed graph, finding the transitive closure of directed graphs, finding the inversion of real matrices, testing whether an undirected graph is a bipartite and fast computation of pathfinder networks. "),Object(o.b)("h2",{id:"pseudocode"},"Pseudocode"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"dist = |V| x |V|\nFOR EACH edge (u,v)\n    dist[u][v] = weight(u,v)\nENDFOR\nFOR EACH vertex v\n    dist[u][v] = 0\nENDFOR\n\nFOR k = 1 to |V|\n    FOR i = 1 to |V|\n        FOR j from 1 to |V|\n            IF dist[i][j] > dist[i][k] + dist[k][j] THEN\n                Dist[i][j] = dist[i][k] + dist[k][j]\n            ENDIF\n        ENDFOR\n    ENDFOR\nENDFOR\n")),Object(o.b)("h2",{id:"usage-in-networkx"},"Usage in NetworkX"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"floyd_warshall(G, weight='weight')")),Object(o.b)("h3",{id:"method-input"},"Method input"),Object(o.b)("p",null,"The first input parameter of the method, G, is a NetworkX graph.\nThe fifth parameter, weight, represents the edge attribute that should be used as the edge weight. If it\u2019s not specified, the default value is \u2018weight\u2019. "),Object(o.b)("h3",{id:"method-output"},"Method output"),Object(o.b)("p",null,"The output of the method is a dictionary keyed by source and target, of shortest paths distances between nodes.."),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("p",null,"In Python\u2019s library, NetworkX implements the Floyd-Warshall algorithm as part of the shortest path algorithms. Insert the graph from Figure 1 in NetworkX (see Appendix A) before you start the example program."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python="},"import networkx as nx\n\nedges = [(1,2, {'weight':4}),\n        (1,3,{'weight':2}),\n        (2,3,{'weight':1}),\n        (2,4, {'weight':5}),\n        (3,4, {'weight':8}),\n        (3,5, {'weight':10}),\n        (4,5,{'weight':2}),\n        (4,6,{'weight':8}),\n        (5,6,{'weight':5})]\nedge_labels = {(1,2):4, (1,3):2, (2,3):1, (2,4):5, (3,4):8, (3,5):10, (4,5):2, (4,6):8, (5,6):5}\n   \n        \nG = nx.Graph()\nfor i in range(1,7):\n    G.add_node(i)\nG.add_edges_from(edges)\n\npos = nx.planar_layout(G)\nnx.draw(G, pos, with_labels = True)\nnx.draw_networkx_edge_labels(G, pos,edge_labels=edge_labels)\n\nfw = nx.floyd_warshall(G, weight='weight')\n\nresults = {a:dict(b) for a,b in fw.items()}  \npp.pprint(results)\n")),Object(o.b)("p",null,"The output is:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"{1: {1: 0, 2: 3, 3: 2, 4: 8, 5: 10, 6: 15},\n 2: {1: 3, 2: 0, 3: 1, 4: 5, 5: 7, 6: 12},\n 3: {1: 2, 2: 1, 3: 0, 4: 6, 5: 8, 6: 13},\n 4: {1: 8, 2: 5, 3: 6, 4: 0, 5: 2, 6: 7},\n 5: {1: 10, 2: 7, 3: 8, 4: 2, 5: 0, 6: 5},\n 6: {1: 15, 2: 12, 3: 13, 4: 7, 5: 5, 6: 0}}\n")))}d.isMDXComponent=!0},95:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var h=a.a.createContext({}),d=function(e){var t=a.a.useContext(h),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=d(e.components);return a.a.createElement(h.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=d(r),u=n,m=p["".concat(i,".").concat(u)]||p[u]||c[u]||o;return r?a.a.createElement(m,s(s({ref:t},h),{},{components:r})):a.a.createElement(m,s({ref:t},h))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var h=2;h<o;h++)i[h]=r[h];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);