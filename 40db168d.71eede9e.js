(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{134:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return b})),o.d(t,"rightToc",(function(){return h})),o.d(t,"default",(function(){return s}));var a=o(1),r=o(9),n=(o(0),o(160)),i=o(159),l={id:"HorizonChart",title:"Horizon Chart"},b={id:"horizon/HorizonChart",title:"Horizon Chart",description:"import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.",source:"@site/docs/horizon/HorizonChart.mdx",permalink:"/xvizdocs/docs/horizon/HorizonChart",sidebar:"sideBar",previous:{title:"Multiple Axes Chart",permalink:"/xvizdocs/docs/multipleaxis/MultipleAxesChart"}},h=[{value:"How to use the Horizon Chart in Power BI?",id:"how-to-use-the-horizon-chart-in-power-bi",children:[{value:"License",id:"license",children:[]},{value:"General",id:"general",children:[]},{value:"Base value",id:"base-value",children:[]},{value:"Layers",id:"layers",children:[]},{value:"Color Scheme",id:"color-scheme",children:[]},{value:"Legend",id:"legend",children:[]},{value:"Number Formatting",id:"number-formatting",children:[]},{value:"Global Fonts",id:"global-fonts",children:[]}]}],c={rightToc:h};function s(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"horizon-chart"},"Horizon Chart"),Object(n.b)("p",null,"Horizon charts are small multiple area charts visualization. They can be\nquite useful for visualizing changes in distributions over time or\nspace. It is small-multiple area charts that allow greater precision for\na given vertical space by using colored bands. These charts can also be\nused with diverging color scales to differentiate positive and negative\nvalues."),Object(n.b)("p",null,"Horizon charts are partially overlapping line plots that create the\nimpression of a mountain range (see Figure below)."),Object(n.b)("img",{alt:"Horizon Chart",src:Object(i.a)("/images/hr1.png")}),Object(n.b)("h2",{id:"how-to-use-the-horizon-chart-in-power-bi"},"How to use the Horizon Chart in Power BI?"),Object(n.b)("p",null,"In the following steps we will outline how you can setup a new Horizon\nChart in Power BI Platform. For our example we will assume that we are\ngoing to use a data source with two dimensions - Product and Date and\nmeasures Discount Amount, Order Amount and Order Quantity."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Create a new project in Power BI Platform."),Object(n.b)("li",{parentName:"ol"},"Click Get Data Source and select the Excel File with the data source\nsimilar to the description outlined previously."),Object(n.b)("li",{parentName:"ol"},"Add a Horizon Chart from the Visualization Section to your Power BI\nproject."),Object(n.b)("li",{parentName:"ol"},"Assign the data source to the Horizon Chart. For our example, assign\nthe Dimension Product to the property Category and assign the\nDimension Date to the property Time Period. Assign the Measure Order\nQuantity to the property Value (see Figure below).")),Object(n.b)("img",{alt:"Visualization Settings",src:Object(i.a)("/images/hr2.png")}),Object(n.b)("p",null,"In the above example, you can also assign the Measures and Dimensions to\nthe Power BI Project by clicking the respective check boxes against the\nDimension and Measures in the Fields Section (see Figure above)."),Object(n.b)("ol",{start:5},Object(n.b)("li",{parentName:"ol"},"Now navigate to the Category Format in the Visualization Section.\nThe Category Format for the Horizon Chart has the following areas:",Object(n.b)("ol",{parentName:"li"},Object(n.b)("li",{parentName:"ol"},"License"),Object(n.b)("li",{parentName:"ol"},"General"),Object(n.b)("li",{parentName:"ol"},"Base Value"),Object(n.b)("li",{parentName:"ol"},"Layers"),Object(n.b)("li",{parentName:"ol"},"Color Scheme"),Object(n.b)("li",{parentName:"ol"},"Legend"),Object(n.b)("li",{parentName:"ol"},"Number Formatting"),Object(n.b)("li",{parentName:"ol"},"Global Fonts")))),Object(n.b)("p",null,"The following sections will highlight the individual configuration of\nthe properties for the Horizon Chart."),Object(n.b)("h3",{id:"license"},"License"),Object(n.b)("p",null,"The License Area will display the License details of the PBX Component\n(see Figure below)."),Object(n.b)("img",{alt:"License",src:Object(i.a)("/images/hr3.png")}),Object(n.b)("h3",{id:"general"},"General"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"For our example, set the property Chart Margin to the value 100 in\nthe Area General (see Figure below).")),Object(n.b)("img",{alt:"General",src:Object(i.a)("/images/hr4.png")}),Object(n.b)("ol",{start:2},Object(n.b)("li",{parentName:"ol"},"Set the property Tick Interval to the value 1."),Object(n.b)("li",{parentName:"ol"},"Set the property X Position to the value 8."),Object(n.b)("li",{parentName:"ol"},"Set the property Y Position to the value 0."),Object(n.b)("li",{parentName:"ol"},"Set the property Width to the value 1270."),Object(n.b)("li",{parentName:"ol"},"Set the property Height to the value 719."),Object(n.b)("li",{parentName:"ol"},"Set the property Alt Text to the description of your choice."),Object(n.b)("li",{parentName:"ol"},"Based on the above set of configurations, you will be able to view\nthe Horizon Chart as shown below.")),Object(n.b)("img",{alt:"Horizon Chart with General\nconfiguration",src:Object(i.a)("/images/hr5.png")}),Object(n.b)("p",null,"From the above Figure, you can observe that the Measures based on the\nProduct and Time Stamp will be viewed as small-multiple area charts. As\nyou hover the mouse over those charts, you will be able to view the\ndistributed values of the Measures in that range."),Object(n.b)("h3",{id:"base-value"},"Base value"),Object(n.b)("p",null,"Base Value are the value from which the Positive or Negative changes are\nplotted on the Chart. Now navigate to the Area Base Value. Set the\nproperty Base Value to the value 100 (see Figure below)."),Object(n.b)("img",{alt:"Base Value",src:Object(i.a)("/images/hr6.png")}),Object(n.b)("p",null,"Based on the above Base Value configuration, you will be able to view\nthe Horizon Chart with a Layer representing the Base Value (see Figure\nbelow)."),Object(n.b)("img",{alt:"Horizon Chart with Base Value\nconfiguration",src:Object(i.a)("/images/hr7.png")}),Object(n.b)("h3",{id:"layers"},"Layers"),Object(n.b)("p",null,"The Horizon Charts will be having a maximum of 5 layers. Now navigate to\nthe Area Layers. For our example, set the property Layers to the value 5\n(see Figure below)."),Object(n.b)("img",{alt:"Base Value",src:Object(i.a)("/images/hr8.png")}),Object(n.b)("p",null,"Based on the above Layers configuration, you will be able to view the\nHorizon Chart with 5 Layers (see Figure below)."),Object(n.b)("img",{alt:"Horizon Chart with Layers\nconfiguration",src:Object(i.a)("/images/hr9.png")}),Object(n.b)("h3",{id:"color-scheme"},"Color Scheme"),Object(n.b)("p",null,"The Horizon Charts will be having a maximum of 9 Color Schemes. Now\nnavigate to the Area Color Scheme. For our example, set the property\nScheme to the option Spectral (see Figure below). The other options are\nRed-Blue, Red-Grey, Purple-Orange, Red-Yellow-Blue, Red-Yellow-Green,\nPink-Red-Green, Pink-Yellow-Green and Brown-Blue-Green."),Object(n.b)("img",{alt:"Color Scheme",src:Object(i.a)("/images/hr10.png")}),Object(n.b)("p",null,"Based on the above Color Scheme configuration, you will be able to view\nthe Horizon Chart configured with Spectral Color Scheme (see Figure\nbelow)."),Object(n.b)("img",{alt:"Horizon Chart with Spectral Color\nScheme",src:Object(i.a)("/images/hr11.png")}),Object(n.b)("h3",{id:"legend"},"Legend"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Navigate to the Area Legend in the category Format. You have the\noption to enable the Legend and configure the settings for the\nLegend (see Figure below)."),Object(n.b)("img",{alt:"Enable Legend",src:Object(i.a)("/images/hr12.png")}))),Object(n.b)("p",null,"For our example, configure the below listed Legend properties for the\nHorizon Chart as shown in the Figure above."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Vertical Alignment - Set the Vertical Alignment as Top for the\nLegend. The other options are Bottom and Middle."),Object(n.b)("li",{parentName:"ul"},"Horizontal Alignment - Set the Horizontal Alignment as Left for the\nLegend. The other options are Center and Right."),Object(n.b)("li",{parentName:"ul"},"Title - Activate the property Title."),Object(n.b)("li",{parentName:"ul"},"Legend Name - Set the property Legend Name to the Text Legend."),Object(n.b)("li",{parentName:"ul"},"Font Color - Set the property Font Color to the color Red."),Object(n.b)("li",{parentName:"ul"},"Title Text Size - Set the property Title Text Size to the value 12.")),Object(n.b)("p",null,"Based on the above set of configuration, you will be able to view the\nHorizon Chart being configured with the Legend properties (see Figure\nbelow)."),Object(n.b)("blockquote",null,Object(n.b)("img",{alt:"Legend Settings in Horizon Chart",src:Object(i.a)("/images/hr13.png")})),Object(n.b)("h3",{id:"number-formatting"},"Number Formatting"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Navigate to the Area Number Formatting in the category Format. You\nhave the option to configure the settings for the Number Formatting\n(see Figure below)."),Object(n.b)("img",{alt:"Number Formatting",src:Object(i.a)("/images/hr14.png")})),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Set the property Value decimal places to the value 2.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},'Set the property Thousand Separator to \\",\\".')),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},'Set the property Decimal Separator to \\".\\".')),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Set the property Display Units to the option Default. The other\noptions are Thousand, Million, Billion and Trillion.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},'Set the property Prefix to \\"p\\".')),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},'Set the property Suffix to \\"s\\".'))),Object(n.b)("p",null,"Based on the above set of configuration, you will be able to view the\nHorizon Chart being configured with the Number Formatting properties\n(see Figure below)."),Object(n.b)("blockquote",null,Object(n.b)("img",{alt:"Number Formatting Settings in Horizon\nChart",src:Object(i.a)("/images/hr15.png")})),Object(n.b)("h3",{id:"global-fonts"},"Global Fonts"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Navigate to the Area Global Fonts in the category Format. You have\nthe option to configure the settings for the Global Fonts (see\nFigure below)."),Object(n.b)("img",{alt:"Global Fonts",src:Object(i.a)("/images/hr16.png")})),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Set the property Font Family to the option Calibri.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Set the property Title Text Size to the value 15."))),Object(n.b)("p",null,"Based on the above set of configuration, you will be able to view the\nHorizon Chart being configured with the Global Font properties (see\nFigure below)."),Object(n.b)("blockquote",null,Object(n.b)("img",{alt:"Global Font Settings in Horizon\nChart",src:Object(i.a)("/images/hr17.png")})))}s.isMDXComponent=!0}}]);