"use strict";(self.webpackChunknetworkx_guide=self.webpackChunknetworkx_guide||[]).push([[816],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),d=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=d(t.components);return r.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=d(n),m=a,g=p["".concat(i,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(g,s(s({ref:e},u),{},{components:n})):r.createElement(g,s({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,s=new Array(o);s[0]=p;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:a,s[1]=l;for(var d=2;d<o;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3137:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],l={id:"functions",title:"Functions overview",sidebar_label:"Functions overview",slug:"/functions"},i=void 0,d={unversionedId:"functions/functions",id:"functions/functions",title:"Functions overview",description:"This site is under construction.",source:"@site/docs/functions/functions.md",sourceDirName:"functions",slug:"/functions",permalink:"/functions",editUrl:"https://github.com/memgraph/networkx-guide/edit/main/docs/functions/functions.md",tags:[],version:"current",frontMatter:{id:"functions",title:"Functions overview",sidebar_label:"Functions overview",slug:"/functions"},sidebar:"networkx_guide",previous:{title:"Drawing basics",permalink:"/visualization/basics"},next:{title:"Attribute basics",permalink:"/functions/attributes/basics"}},u={},c=[{value:"Graph functions",id:"graph-functions",level:2},{value:"Node functions",id:"node-functions",level:2},{value:"Edge functions",id:"edge-functions",level:2},{value:"Self loop functions",id:"self-loop-functions",level:2},{value:"Attribute functions",id:"attribute-functions",level:2},{value:"Path functions",id:"path-functions",level:2},{value:"Freezing graph structure functions",id:"freezing-graph-structure-functions",level:2}],p={toc:c};function m(t){var e=t.components,n=(0,a.Z)(t,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This site is under construction."))),(0,o.kt)("h2",{id:"graph-functions"},"Graph functions"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Function"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.degree.html#networkx.classes.function.degree"},"degree"),"(G","[, nbunch, weight]",")"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns a degree view of single node or of nbunch of nodes.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.degree_histogram.html#networkx.classes.function.degree_histogram"},"degree_histogram"),"(G)"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns a list of the frequency of each degree value.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.density.html#networkx.classes.function.density"},"density"),"(G)"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns the density of a graph.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.info.html#networkx.classes.function.info"},"info"),"(G","[, n]",")"),(0,o.kt)("td",{parentName:"tr",align:null},"Return a summary of information for the graph G or a single node n.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.create_empty_copy.html#networkx.classes.function.create_empty_copy"},"create_empty_copy"),"(G","[, with_data]",")"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns a copy of the graph G with all of the edges removed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.is_directed.html#networkx.classes.function.is_directed"},"is_directed"),"(G)"),(0,o.kt)("td",{parentName:"tr",align:null},"Return True if graph is directed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.to_directed.html#networkx.classes.function.to_directed"},"to_directed"),"(graph)"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns a directed view of the graph graph.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.to_undirected.html#networkx.classes.function.to_undirected"},"to_undirected"),"(graph)"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns an undirected view of the graph graph.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.is_empty.html#networkx.classes.function.is_empty"},"is_empty"),"(G)"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns True if G has no edges.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.add_star.html#networkx.classes.function.add_star"},"add_star"),"(G_to_add_to, nodes_for_star, **attr)"),(0,o.kt)("td",{parentName:"tr",align:null},"Add a star to Graph G_to_add_to.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.add_path.html#networkx.classes.function.add_path"},"add_path"),"(G_to_add_to, nodes_for_path, **attr)"),(0,o.kt)("td",{parentName:"tr",align:null},"Add a path to the Graph G_to_add_to.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.add_cycle.html#networkx.classes.function.add_cycle"},"add_cycle"),"(G_to_add_to, nodes_for_cycle, **attr)"),(0,o.kt)("td",{parentName:"tr",align:null},"Add a cycle to the Graph G_to_add_to.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.subgraph.html#networkx.classes.function.subgraph"},"subgraph"),"(G, nbunch)"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns the subgraph induced on nodes in nbunch.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.subgraph_view.html#networkx.classes.function.subgraph_view"},"subgraph_view"),"(G","[, filter_node, filter_edge]",")"),(0,o.kt)("td",{parentName:"tr",align:null},"View of G applying a filter on nodes and edges.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.induced_subgraph.html#networkx.classes.function.induced_subgraph"},"induced_subgraph"),"(G, nbunch)"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns a SubGraph view of G showing only nodes in nbunch.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.restricted_view.html#networkx.classes.function.restricted_view"},"restricted_view"),"(G, nodes, edges)"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns a view of G with hidden nodes and edges.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.reverse_view.html#networkx.classes.function.reverse_view"},"reverse_view"),"(G)"),(0,o.kt)("td",{parentName:"tr",align:null},"View of G with edge directions reversed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.edge_subgraph.html#networkx.classes.function.edge_subgraph"},"edge_subgraph"),"(G, edges)"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns a view of the subgraph induced by the specified edges.")))),(0,o.kt)("h2",{id:"node-functions"},"Node functions"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Function"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.nodes.html#networkx.classes.function.nodes"},"nodes"),"(G)"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns an iterator over the graph nodes.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.number_of_nodes.html#networkx.classes.function.number_of_nodes"},"number_of_nodes"),"(G)"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns the number of nodes in the graph.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.neighbors.html#networkx.classes.function.neighbors"},"neighbors"),"(G, n)"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns a list of nodes connected to node n.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.all_neighbors.html#networkx.classes.function.all_neighbors"},"all_neighbors"),"(graph, node)"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns all of the neighbors of a node in the graph.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.non_neighbors.html#networkx.classes.function.non_neighbors"},"non_neighbors"),"(graph, node)"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns the non-neighbors of the node in the graph.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.common_neighbors.html#networkx.classes.function.common_neighbors"},"common_neighbors"),"(G, u, v)"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns the common neighbors of two nodes in a graph.")))),(0,o.kt)("h2",{id:"edge-functions"},"Edge functions"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Function"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.edges.html#networkx.classes.function.edges"},"edges"),"(G","[, nbunch]",")"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns an edge view of edges incident to nodes in nbunch.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.number_of_edges.html#networkx.classes.function.number_of_edges"},"number_of_edges"),"(G)"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns the number of edges in the graph.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.density.html#networkx.classes.function.density"},"density"),"(G)"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns the density of a graph.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.non_edges.html#networkx.classes.function.non_edges"},"non_edges"),"(G)"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns the non-existent edges in the graph.")))),(0,o.kt)("h2",{id:"self-loop-functions"},"Self loop functions"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Function"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.selfloop_edges.html#networkx.classes.function.selfloop_edges"},"selfloop_edges"),"(G","[, data, keys, default]",")"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns an iterator over selfloop edges.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.number_of_selfloops.html#networkx.classes.function.number_of_selfloops"},"number_of_selfloops"),"(G)"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns the number of selfloop edges.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.nodes_with_selfloops.html#networkx.classes.function.nodes_with_selfloops"},"nodes_with_selfloops"),"(G)"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns an iterator over nodes with self loops.")))),(0,o.kt)("h2",{id:"attribute-functions"},"Attribute functions"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Function"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.is_weighted.html#networkx.classes.function.is_weighted"},"is_weighted"),"(G","[, edge, weight]",")"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns True if G has weighted edges.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.is_negatively_weighted.html#networkx.classes.function.is_negatively_weighted"},"is_negatively_weighted"),"(G","[, edge, weight]",")"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns True if G has negatively weighted edges.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.get_node_attributes.html#networkx.classes.function.get_node_attributes"},"set_node_attributes"),"(G, values","[, name]",")"),(0,o.kt)("td",{parentName:"tr",align:null},"Sets node attributes from a given value or dictionary of values.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.get_node_attributes.html#networkx.classes.function.get_node_attributes"},"get_node_attributes"),"(G, name)"),(0,o.kt)("td",{parentName:"tr",align:null},"Get node attributes from graph.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.set_edge_attributes.html#networkx.classes.function.set_edge_attributes"},"set_edge_attributes"),"(G, values","[, name]",")"),(0,o.kt)("td",{parentName:"tr",align:null},"Sets edge attributes from a given value or dictionary of values.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.get_edge_attributes.html#networkx.classes.function.get_edge_attributes"},"get_edge_attributes"),"(G, name)"),(0,o.kt)("td",{parentName:"tr",align:null},"Get edge attributes from graph.")))),(0,o.kt)("h2",{id:"path-functions"},"Path functions"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Function"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.is_path.html#networkx.classes.function.is_path"},"is_path"),"(G, path)"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns whether or not the specified path exists.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.path_weight.html#networkx.classes.function.path_weight"},"path_weight"),"(G, path, weight)"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns total cost associated with specified path and weight.")))),(0,o.kt)("h2",{id:"freezing-graph-structure-functions"},"Freezing graph structure functions"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Function"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.freeze.html#networkx.classes.function.freeze"},"freeze"),"(G)"),(0,o.kt)("td",{parentName:"tr",align:null},"Modify graph to prevent further change by adding or removing nodes or edges.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/generated/networkx.classes.function.is_frozen.html#networkx.classes.function.is_frozen"},"is_frozen"),"(G)"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns True if graph is frozen.")))))}m.isMDXComponent=!0}}]);