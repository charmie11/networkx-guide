"use strict";(self.webpackChunknetworkx_guide=self.webpackChunknetworkx_guide||[]).push([[10],{3905:function(A,e,n){n.d(e,{Zo:function(){return C},kt:function(){return l}});var t=n(7294);function g(A,e,n){return e in A?Object.defineProperty(A,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):A[e]=n,A}function o(A,e){var n=Object.keys(A);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(A);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),n.push.apply(n,t)}return n}function r(A){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){g(A,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(n,e))}))}return A}function i(A,e){if(null==A)return{};var n,t,g=function(A,e){if(null==A)return{};var n,t,g={},o=Object.keys(A);for(t=0;t<o.length;t++)n=o[t],e.indexOf(n)>=0||(g[n]=A[n]);return g}(A,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);for(t=0;t<o.length;t++)n=o[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(A,n)&&(g[n]=A[n])}return g}var k=t.createContext({}),a=function(A){var e=t.useContext(k),n=e;return A&&(n="function"==typeof A?A(e):r(r({},e),A)),n},C=function(A){var e=a(A.components);return t.createElement(k.Provider,{value:e},A.children)},w={inlineCode:"code",wrapper:function(A){var e=A.children;return t.createElement(t.Fragment,{},e)}},c=t.forwardRef((function(A,e){var n=A.components,g=A.mdxType,o=A.originalType,k=A.parentName,C=i(A,["components","mdxType","originalType","parentName"]),c=a(n),l=g,B=c["".concat(k,".").concat(l)]||c[l]||w[l]||o;return n?t.createElement(B,r(r({ref:e},C),{},{components:n})):t.createElement(B,r({ref:e},C))}));function l(A,e){var n=arguments,g=e&&e.mdxType;if("string"==typeof A||g){var o=n.length,r=new Array(o);r[0]=c;var i={};for(var k in e)hasOwnProperty.call(e,k)&&(i[k]=e[k]);i.originalType=A,i.mdxType="string"==typeof A?A:g,r[1]=i;for(var a=2;a<o;a++)r[a]=n[a];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},870:function(A,e,n){n.r(e),n.d(e,{assets:function(){return C},contentTitle:function(){return k},default:function(){return l},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return w}});var t=n(7462),g=n(3366),o=(n(7294),n(3905)),r=["components"],i={id:"basics",title:"Drawing basics",sidebar_label:"Drawing basics"},k=void 0,a={unversionedId:"visualization/basics",id:"visualization/basics",title:"Drawing basics",description:"1. How to draw directed graphs using NetworkX in Python?",source:"@site/docs/visualization/basics.md",sourceDirName:"visualization",slug:"/visualization/basics",permalink:"/visualization/basics",editUrl:"https://github.com/memgraph/networkx-guide/edit/main/docs/visualization/basics.md",tags:[],version:"current",frontMatter:{id:"basics",title:"Drawing basics",sidebar_label:"Drawing basics"},sidebar:"networkx_guide",previous:{title:"Visualization overview",permalink:"/visualization"},next:{title:"Functions overview",permalink:"/functions"}},C={},w=[{value:"1. How to draw directed graphs using NetworkX in Python?",id:"1-how-to-draw-directed-graphs-using-networkx-in-python",level:2},{value:"2. How to draw a NetworkX graph with labels?",id:"2-how-to-draw-a-networkx-graph-with-labels",level:2},{value:"3. How to change the color and width of edges in NetworkX graphs according to edge attributes?",id:"3-how-to-change-the-color-and-width-of-edges-in-networkx-graphs-according-to-edge-attributes",level:2},{value:"4. How to color nodes in NetworkX graphs?",id:"4-how-to-color-nodes-in-networkx-graphs",level:2},{value:"5. How to color nodes in NetworkX graphs according to their attributes?",id:"5-how-to-color-nodes-in-networkx-graphs-according-to-their-attributes",level:2}],c={toc:w};function l(A){var e=A.components,i=(0,g.Z)(A,r);return(0,o.kt)("wrapper",(0,t.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-how-to-draw-directed-graphs-using-networkx-in-python"},"1. How to draw directed graphs using NetworkX in Python?"),(0,o.kt)("p",null,"By using the base class for directed graphs, ",(0,o.kt)("a",{parentName:"p",href:"https://networkx.org/documentation/stable//reference/classes/digraph.html"},"DiGraph"),"(),\nwe are able to draw a directed graph with arrows to indicate the direction of edges."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import networkx as nx\nimport matplotlib.pyplot as plt\n\nG = nx.DiGraph()\nG.add_edges_from(\n    [('A', 'B'), ('A', 'C'), ('D', 'B'), ('E', 'C'), ('E', 'F'),\n     ('B', 'H'), ('B', 'G'), ('B', 'F'), ('C', 'G')])\n\nnx.draw(G)\n\nplt.show()\n")),(0,o.kt)("p",null,"The output is:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Matplotlib figure",src:n(3729).Z,width:"640",height:"480"})),(0,o.kt)("h2",{id:"2-how-to-draw-a-networkx-graph-with-labels"},"2. How to draw a NetworkX graph with labels?"),(0,o.kt)("p",null,"If you want the node labels to be visible in your drawing, just add ",(0,o.kt)("inlineCode",{parentName:"p"},"with_labels=True")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"nx.draw")," call."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import networkx as nx\nimport matplotlib.pyplot as plt\n\nG=nx.Graph()\nG.add_edge("Node1", "Node2")\nnx.draw(G, with_labels = True)\n\nplt.show()\n')),(0,o.kt)("p",null,"The output is:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Matplotlib figure",src:n(9322).Z,width:"640",height:"480"})),(0,o.kt)("h2",{id:"3-how-to-change-the-color-and-width-of-edges-in-networkx-graphs-according-to-edge-attributes"},"3. How to change the color and width of edges in NetworkX graphs according to edge attributes?"),(0,o.kt)("p",null,"Dictionaries are the underlying data structure used for NetworkX graphs, and as of Python 3.7+ they maintain insertion order.\nYou can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"nx.get_edge_attributes()")," function to retrieve edge attributes. For every run, we are guaranteed to have the same edge order."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import networkx as nx\nimport matplotlib.pyplot as plt\n\nG = nx.Graph()\nG.add_edge(1, 2, color='r' ,weight=3)\nG.add_edge(2, 3, color='b', weight=5)\nG.add_edge(3, 4, color='g', weight=7)\n\npos = nx.circular_layout(G)\n\ncolors = nx.get_edge_attributes(G,'color').values()\nweights = nx.get_edge_attributes(G,'weight').values()\n\nnx.draw(G, pos, edge_color=colors, width=list(weights))\n\nplt.show()\n")),(0,o.kt)("p",null,"The output is:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Matplotlib figure",src:n(6697).Z,width:"640",height:"480"})),(0,o.kt)("h2",{id:"4-how-to-color-nodes-in-networkx-graphs"},"4. How to color nodes in NetworkX graphs?"),(0,o.kt)("p",null,"You need to define a color map that assigns a color to each node.\nFor example, if were to color the first 15 nodes of a graph in ",(0,o.kt)("inlineCode",{parentName:"p"},"orange"),", and the rest in ",(0,o.kt)("inlineCode",{parentName:"p"},"blue"),", then the code would be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import networkx as nx\nimport matplotlib.pyplot as plt\n\nG = nx.karate_club_graph()\ncolor_map = []\nfor node in G:\n    if node < 15:\n        color_map.append('orange')\n    else: \n        color_map.append('blue')      \n\nnx.draw(G, node_color=color_map, with_labels=True)\n\nplt.show()\n")),(0,o.kt)("p",null,"The output is:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Matplotlib figure",src:n(4819).Z,width:"640",height:"480"})),(0,o.kt)("h2",{id:"5-how-to-color-nodes-in-networkx-graphs-according-to-their-attributes"},"5. How to color nodes in NetworkX graphs according to their attributes?"),(0,o.kt)("p",null,"You need to define a color map that assigns a color to each node."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import networkx as nx\nimport matplotlib.pyplot as plt\n\nG = nx.Graph()\nG.add_node('A', color='red')\nG.add_node('B', color='green')\nG.add_node('C', color='blue')\n\nG.add_edges_from(\n    [('A', 'B'), ('A', 'C'), ('B', 'C')])\n\ncolors = [node[1]['color'] for node in G.nodes(data=True)]\n\nnx.draw(G, node_color=colors, with_labels=True, font_color='white')\n\nplt.show()\n")),(0,o.kt)("p",null,"The output is:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Matplotlib figure",src:n(7855).Z,width:"640",height:"480"})))}l.isMDXComponent=!0},3729:function(A,e,n){e.Z=n.p+"assets/images/visualization-basics-matplotlib-1-088cf0a0c58347ce46d57aceb9eb162b.png"},9322:function(A,e){e.Z="data:image/png;base64,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"},6697:function(A,e){e.Z="data:image/png;base64,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"},4819:function(A,e,n){e.Z=n.p+"assets/images/visualization-basics-matplotlib-4-8b5ba27968e3c51a3ee4cbd01524ef08.png"},7855:function(A,e,n){e.Z=n.p+"assets/images/visualization-basics-matplotlib-5-f6d9d099f5ff16dd40b6d063b4e9b494.png"}}]);