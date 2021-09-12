"use strict";(self.webpackChunknetworkx_guide=self.webpackChunknetworkx_guide||[]).push([[63],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=m(n),d=a,u=p["".concat(l,".").concat(d)]||p[d]||c[d]||o;return n?r.createElement(u,i(i({ref:t},h),{},{components:n})):r.createElement(u,i({ref:t},h))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5622:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return h},default:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"girvan-newman",title:"Girvan-Newman algorithm",sidebar_label:"Girvan-Newman"},l=void 0,m={unversionedId:"algorithms/community-detection/girvan-newman",id:"algorithms/community-detection/girvan-newman",isDocsHomePage:!1,title:"Girvan-Newman algorithm",description:"The Girvan-Newman algorithm for the detection and analysis of community structure relies on the iterative elimination of edges that have the highest number of shortest paths between nodes passing through them. By removing edges from the graph one-by-one, the network breaks down into smaller pieces, so-called communities. The algorithm was introduced by Michelle Girvan and Mark Newman.",source:"@site/docs/algorithms/community-detection/girvan\u2013newman.md",sourceDirName:"algorithms/community-detection",slug:"/algorithms/community-detection/girvan-newman",permalink:"/algorithms/community-detection/girvan-newman",editUrl:"https://github.com/memgraph/networkx-guide/edit/main/docs/algorithms/community-detection/girvan\u2013newman.md",tags:[],version:"current",frontMatter:{id:"girvan-newman",title:"Girvan-Newman algorithm",sidebar_label:"Girvan-Newman"},sidebar:"networkx_guide",previous:{title:"Community detection",permalink:"/algorithms/community-detection"},next:{title:"Weakly connected components (Union find)",permalink:"/algorithms/components/weakly-connected-components"}},h=[{value:"How does it work?",id:"how-does-it-work",children:[]},{value:"Betweenness centrality",id:"betweenness-centrality",children:[]},{value:"Pseudocode",id:"pseudocode",children:[]},{value:"Usage in NetworkX",id:"usage-in-networkx",children:[{value:"Method input",id:"method-input",children:[]},{value:"Method output",id:"method-output",children:[]},{value:"Example",id:"example",children:[]}]}],c={toc:h};function p(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Girvan-Newman algorithm")," for the detection and analysis of community structure relies on the ",(0,o.kt)("em",{parentName:"p"},"iterative elimination of edges that have the highest number of shortest paths between nodes passing through them"),". By removing edges from the graph one-by-one, the network breaks down into smaller pieces, so-called communities. The algorithm was introduced by Michelle Girvan and Mark Newman."),(0,o.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,o.kt)("p",null,"The idea was to find which edges in a network occur most frequently between other pairs of nodes by finding edges betweenness centrality. The edges joining communities are then expected to have a high edge betweenness. The underlying community structure of the network will be much more fine-grained once the edges with the highest betweenness are eliminated which means that communities will be much easier to spot."),(0,o.kt)("p",null,"The Girvan-Newman algorithm can be divided into four main steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"For every edge in a graph, calculate the edge betweenness centrality."),(0,o.kt)("li",{parentName:"ol"},"Remove the edge with the highest betweenness centrality."),(0,o.kt)("li",{parentName:"ol"},"Calculate the betweenness centrality for every remaining edge."),(0,o.kt)("li",{parentName:"ol"},"Repeat steps 2-4 until there are no more edges left.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Girvan-newman-example-1",src:n(329).Z})),(0,o.kt)("p",null,"In this example, you can see how a typical graph looks like when ",(0,o.kt)("strong",{parentName:"p"},"edges are assigned weights based on the number of shortest paths passing through them"),". To keep things simple, we only calculated the number of undirected shortest paths that pass through an edge. The edge between nodes ",(0,o.kt)("strong",{parentName:"p"},"A")," and ",(0,o.kt)("strong",{parentName:"p"},"B")," has a strength of 1 because we don\u2019t count ",(0,o.kt)("strong",{parentName:"p"},"A->B")," and ",(0,o.kt)("strong",{parentName:"p"},"B->A")," as two different paths."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Girvan-newman-example-2",src:n(2442).Z})),(0,o.kt)("p",null,"The Girvan-Newman algorithm would remove the edge between nodes ",(0,o.kt)("strong",{parentName:"p"},"C")," and ",(0,o.kt)("strong",{parentName:"p"},"D")," because it is the one with the highest strength. As you can see intuitively, this means that the edge is located between communities.\nAfter removing an edge, the betweenness centrality has to be recalculated for every remaining edge. In this example, we have come to the point where every edge has the same betweenness centrality."),(0,o.kt)("h2",{id:"betweenness-centrality"},"Betweenness centrality"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Betweenness centrality")," measures the extent to which a vertex or edge lies on paths between vertices. Vertices and edges with high betweenness may have considerable influence within a network by virtue of their control over information passing between others."),(0,o.kt)("p",null,"The calculation of betweenness centrality is not standardized and there are many ways to solve it. It is defined as the number of shortest paths in the graph that pass through the node or edge divided by the total number of shortest paths."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Betweenness-example",src:n(9852).Z})),(0,o.kt)("p",null,"The image above shows an undirected graph colored based on the betweenness centrality of each vertex from least (red) to greatest (blue)."),(0,o.kt)("h2",{id:"pseudocode"},"Pseudocode"),(0,o.kt)("p",null,"In each iteration, calculate the betweenness centrality for all edges in the graph. Remove the edge with the highest centrality. Repeat until there are no more edges left."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"REPEAT\n    LET n BE number of edges in the graph\n    FOR i=0 to n-1\n        LET B[i] BE betweenness centrality of edge i\n        IF B[i] > max_B THEN\n            max_B = B[i]\n            max_B_edge = i\n        ENDIF\n    ENDFOR\n    remove edge i from graph\nUNTIL number of edges in graph is 0\n")),(0,o.kt)("h2",{id:"usage-in-networkx"},"Usage in NetworkX"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"girvan_newman(G, most_valuable_edge=None)\n")),(0,o.kt)("h3",{id:"method-input"},"Method input"),(0,o.kt)("p",null,"The first input parameter of the method, ",(0,o.kt)("inlineCode",{parentName:"p"},"G"),", is a NetworkX graph.\nThe second parameter, ",(0,o.kt)("inlineCode",{parentName:"p"},"most_valuable_edge"),", is a function that takes a graph as input and returns the edge that should be removed from the graph in each iteration. If no function is specified, the edge with the highest betweenness centrality will be chosen in each iteration."),(0,o.kt)("h3",{id:"method-output"},"Method output"),(0,o.kt)("p",null,"The output of the method is an iterator over tuples of sets of nodes in ",(0,o.kt)("inlineCode",{parentName:"p"},"G"),". Each set of nodes represents a community and each tuple is a sequence of communities at a particular level (iteration) of the algorithm. "),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import matplotlib.pyplot as plt\nimport networkx as nx\nfrom networkx.algorithms.community.centrality import girvan_newman\n\nG = nx.karate_club_graph()\ncommunities = girvan_newman(G)\n\nnode_groups = []\nfor com in next(communities):\n  node_groups.append(list(com))\n\nprint(node_groups)\n\ncolor_map = []\nfor node in G:\n    if node in node_groups[0]:\n        color_map.append('blue')\n    else: \n        color_map.append('green')  \nnx.draw(G, node_color=color_map, with_labels=True)\nplt.show()\n")),(0,o.kt)("p",null,"The output is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[[0, 1, 3, 4, 5, 6, 7, 10, 11, 12, 13, 16, 17, 19, 21], \n[2, 8, 9, 14, 15, 18, 20, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]]\n")),(0,o.kt)("p",null,"The network has been divided into two distinct communities:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Graph",src:n(9869).Z})))}p.isMDXComponent=!0},9852:function(e,t,n){t.Z=n.p+"assets/images/betweenness-example-cbad71113c6da9653030cd68f4fa3a33.png"},329:function(e,t,n){t.Z=n.p+"assets/images/girvan-newman-example-one-ccbdfc6710fb745b5b36bd36e688f799.jpg"},2442:function(e,t,n){t.Z=n.p+"assets/images/girvan-newman-example-two-d8ba556c56b207e70825862714606287.jpg"},9869:function(e,t,n){t.Z=n.p+"assets/images/girvan-newman-matplotlib-9c46583212fe9ffe9167ffc088e60066.png"}}]);