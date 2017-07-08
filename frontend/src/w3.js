import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "boxSizing": "border-box",
        "MsTextSizeAdjust": "100%",
        "WebkitTextSizeAdjust": "100%",
        "fontFamily": "Verdana,sans-serif",
        "fontSize": 15,
        "lineHeight": 1.5,
        "overflowX": "hidden"
    },
    "*": {
        "boxSizing": "inherit"
    },
    "*:before": {
        "boxSizing": "inherit"
    },
    "*:after": {
        "boxSizing": "inherit"
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontFamily": "Verdana,sans-serif",
        "fontSize": 15,
        "lineHeight": 1.5
    },
    "article": {
        "display": "block"
    },
    "aside": {
        "display": "block"
    },
    "details": {
        "display": "block"
    },
    "figcaption": {
        "display": "block"
    },
    "figure": {
        "display": "block",
        "marginTop": 1,
        "marginRight": 40,
        "marginBottom": 1,
        "marginLeft": 40
    },
    "footer": {
        "display": "block"
    },
    "header": {
        "display": "block"
    },
    "main": {
        "display": "block",
        "transition": "margin-left .4s"
    },
    "menu": {
        "display": "block"
    },
    "nav": {
        "display": "block"
    },
    "section": {
        "display": "block"
    },
    "summary": {
        "display": "block"
    },
    "audio": {
        "display": "inline-block"
    },
    "canvas": {
        "display": "inline-block"
    },
    "progress": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "video": {
        "display": "inline-block"
    },
    "audio:not([controls])": {
        "display": "none",
        "height": 0
    },
    "[hidden]": {
        "display": "none"
    },
    "template": {
        "display": "none"
    },
    "a": {
        "backgroundColor": "transparent",
        "WebkitTextDecorationSkip": "objects",
        "color": "inherit"
    },
    "a:active": {
        "outlineWidth": 0
    },
    "a:hover": {
        "outlineWidth": 0
    },
    "abbr[title]": {
        "borderBottom": "none",
        "textDecoration": "underline dotted"
    },
    "dfn": {
        "fontStyle": "italic"
    },
    "mark": {
        "background": "#ff0",
        "color": "#000"
    },
    "small": {
        "fontSize": "80%"
    },
    "sub": {
        "fontSize": "75%",
        "lineHeight": 0,
        "position": "relative",
        "verticalAlign": "baseline",
        "bottom": -0.25
    },
    "sup": {
        "fontSize": "75%",
        "lineHeight": 0,
        "position": "relative",
        "verticalAlign": "baseline",
        "top": -0.5
    },
    "img": {
        "borderStyle": "none",
        "marginBottom": -5
    },
    "svg:not(:root)": {
        "overflow": "hidden"
    },
    "code": {
        "fontFamily": "monospace,monospace",
        "fontSize": 1
    },
    "kbd": {
        "fontFamily": "monospace,monospace",
        "fontSize": 1
    },
    "pre": {
        "fontFamily": "monospace,monospace",
        "fontSize": 1
    },
    "samp": {
        "fontFamily": "monospace,monospace",
        "fontSize": 1
    },
    "hr": {
        "boxSizing": "content-box",
        "height": 0,
        "overflow": "visible",
        "border": 0,
        "borderTop": "1px solid #eee",
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "button": {
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "overflow": "visible",
        "textTransform": "none",
        "WebkitAppearance": "button"
    },
    "input": {
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "overflow": "visible"
    },
    "select": {
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "textTransform": "none"
    },
    "textarea": {
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "overflow": "auto"
    },
    "optgroup": {
        "fontWeight": "bold"
    },
    "html [type=button]": {
        "WebkitAppearance": "button"
    },
    "[type=reset]": {
        "WebkitAppearance": "button"
    },
    "[type=submit]": {
        "WebkitAppearance": "button"
    },
    "button::-moz-focus-inner": {
        "borderStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "[type=button]::-moz-focus-inner": {
        "borderStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "[type=reset]::-moz-focus-inner": {
        "borderStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "[type=submit]::-moz-focus-inner": {
        "borderStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "button:-moz-focusring": {
        "outline": "1px dotted ButtonText"
    },
    "[type=button]:-moz-focusring": {
        "outline": "1px dotted ButtonText"
    },
    "[type=reset]:-moz-focusring": {
        "outline": "1px dotted ButtonText"
    },
    "[type=submit]:-moz-focusring": {
        "outline": "1px dotted ButtonText"
    },
    "fieldset": {
        "border": "1px solid #c0c0c0",
        "marginTop": 0,
        "marginRight": 2,
        "marginBottom": 0,
        "marginLeft": 2,
        "paddingTop": 0.35,
        "paddingRight": 0.625,
        "paddingBottom": 0.75,
        "paddingLeft": 0.625
    },
    "legend": {
        "color": "inherit",
        "display": "table",
        "maxWidth": "100%",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "whiteSpace": "normal"
    },
    "[type=checkbox]": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "[type=radio]": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "[type=number]::-webkit-inner-spin-button": {
        "height": "auto"
    },
    "[type=number]::-webkit-outer-spin-button": {
        "height": "auto"
    },
    "[type=search]": {
        "WebkitAppearance": "textfield",
        "outlineOffset": -2
    },
    "[type=search]::-webkit-search-cancel-button": {
        "WebkitAppearance": "none"
    },
    "[type=search]::-webkit-search-decoration": {
        "WebkitAppearance": "none"
    },
    "::-webkit-input-placeholder": {
        "color": "inherit",
        "opacity": 0.54
    },
    "::-webkit-file-upload-button": {
        "WebkitAppearance": "button",
        "font": "inherit"
    },
    "h1": {
        "fontSize": 36,
        "fontFamily": "\"Segoe UI\",Arial,sans-serif",
        "fontWeight": "400",
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "h2": {
        "fontSize": 30,
        "fontFamily": "\"Segoe UI\",Arial,sans-serif",
        "fontWeight": "400",
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "h3": {
        "fontSize": 24,
        "fontFamily": "\"Segoe UI\",Arial,sans-serif",
        "fontWeight": "400",
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "h4": {
        "fontSize": 20,
        "fontFamily": "\"Segoe UI\",Arial,sans-serif",
        "fontWeight": "400",
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "h5": {
        "fontSize": 18,
        "fontFamily": "\"Segoe UI\",Arial,sans-serif",
        "fontWeight": "400",
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "h6": {
        "fontSize": 16,
        "fontFamily": "\"Segoe UI\",Arial,sans-serif",
        "fontWeight": "400",
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "w3-serif": {
        "fontFamily": "serif"
    },
    "w3-wide": {
        "letterSpacing": 4
    },
    "w3-image": {
        "maxWidth": "100%",
        "height": "auto"
    },
    "w3-table": {
        "borderCollapse": "collapse",
        "borderSpacing": 0,
        "width": "100%",
        "display": "table"
    },
    "w3-table-all": {
        "borderCollapse": "collapse",
        "borderSpacing": 0,
        "width": "100%",
        "display": "table",
        "border": "1px solid #ccc"
    },
    "w3-bordered tr": {
        "borderBottom": "1px solid #ddd"
    },
    "w3-table-all tr": {
        "borderBottom": "1px solid #ddd"
    },
    "w3-striped tbody tr:nth-child(even)": {
        "backgroundColor": "#f1f1f1"
    },
    "w3-table-all tr:nth-child(odd)": {
        "backgroundColor": "#fff"
    },
    "w3-table-all tr:nth-child(even)": {
        "backgroundColor": "#f1f1f1"
    },
    "w3-hoverable tbody tr:hover": {
        "backgroundColor": "#ccc"
    },
    "w3-ulw3-hoverable li:hover": {
        "backgroundColor": "#ccc"
    },
    "w3-centered tr th": {
        "textAlign": "center"
    },
    "w3-centered tr td": {
        "textAlign": "center"
    },
    "w3-table td": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "display": "table-cell",
        "textAlign": "left",
        "verticalAlign": "top"
    },
    "w3-table th": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "display": "table-cell",
        "textAlign": "left",
        "verticalAlign": "top"
    },
    "w3-table-all td": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "display": "table-cell",
        "textAlign": "left",
        "verticalAlign": "top"
    },
    "w3-table-all th": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "display": "table-cell",
        "textAlign": "left",
        "verticalAlign": "top"
    },
    "w3-table th:first-child": {
        "paddingLeft": 16
    },
    "w3-table td:first-child": {
        "paddingLeft": 16
    },
    "w3-table-all th:first-child": {
        "paddingLeft": 16
    },
    "w3-table-all td:first-child": {
        "paddingLeft": 16
    },
    "w3-btn": {
        "border": "none",
        "display": "inline-block",
        "outline": 0,
        "paddingTop": 8,
        "paddingRight": 16,
        "paddingBottom": 8,
        "paddingLeft": 16,
        "verticalAlign": "middle",
        "overflow": "hidden",
        "textDecoration": "none",
        "color": "inherit",
        "backgroundColor": "inherit",
        "textAlign": "center",
        "cursor": "pointer",
        "whiteSpace": "nowrap",
        "WebkitTouchCallout": "none",
        "WebkitUserSelect": "none",
        "KhtmlUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none"
    },
    "w3-button": {
        "border": "none",
        "display": "inline-block",
        "outline": 0,
        "paddingTop": 8,
        "paddingRight": 16,
        "paddingBottom": 8,
        "paddingLeft": 16,
        "verticalAlign": "middle",
        "overflow": "hidden",
        "textDecoration": "none",
        "color": "inherit",
        "backgroundColor": "inherit",
        "textAlign": "center",
        "cursor": "pointer",
        "whiteSpace": "nowrap",
        "WebkitTouchCallout": "none",
        "WebkitUserSelect": "none",
        "KhtmlUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none"
    },
    "w3-btn:hover": {
        "boxShadow": "0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)"
    },
    "w3-disabled": {
        "cursor": "not-allowed",
        "opacity": 0.3
    },
    "w3-btn:disabled": {
        "cursor": "not-allowed",
        "opacity": 0.3
    },
    "w3-button:disabled": {
        "cursor": "not-allowed",
        "opacity": 0.3
    },
    "w3-disabled *": {
        "pointerEvents": "none"
    },
    ":disabled *": {
        "pointerEvents": "none"
    },
    "w3-btnw3-disabled:hover": {
        "boxShadow": "none"
    },
    "w3-btn:disabled:hover": {
        "boxShadow": "none"
    },
    "w3-badge": {
        "backgroundColor": "#000",
        "color": "#fff",
        "display": "inline-block",
        "paddingLeft": 8,
        "paddingRight": 8,
        "textAlign": "center",
        "borderRadius": "50%"
    },
    "w3-tag": {
        "backgroundColor": "#000",
        "color": "#fff",
        "display": "inline-block",
        "paddingLeft": 8,
        "paddingRight": 8,
        "textAlign": "center"
    },
    "w3-ul": {
        "listStyleType": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "w3-ul li": {
        "paddingTop": 8,
        "paddingRight": 16,
        "paddingBottom": 8,
        "paddingLeft": 16,
        "borderBottom": "1px solid #ddd"
    },
    "w3-ul li:last-child": {
        "borderBottom": "none"
    },
    "w3-tooltip": {
        "position": "relative"
    },
    "w3-display-container": {
        "position": "relative"
    },
    "w3-tooltip w3-text": {
        "display": "none"
    },
    "w3-tooltip:hover w3-text": {
        "display": "inline-block"
    },
    "w3-ripple:active": {
        "opacity": 0.5
    },
    "w3-ripple": {
        "transition": "opacity 0s"
    },
    "w3-input": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "display": "block",
        "border": "none",
        "borderBottom": "1px solid #ccc",
        "width": "100%"
    },
    "w3-select": {
        "paddingTop": 9,
        "paddingRight": 0,
        "paddingBottom": 9,
        "paddingLeft": 0,
        "width": "100%",
        "border": "none",
        "borderBottom": "1px solid #ccc"
    },
    "w3-dropdown-click": {
        "position": "relative",
        "display": "inline-block",
        "cursor": "pointer"
    },
    "w3-dropdown-hover": {
        "position": "relative",
        "display": "inline-block",
        "cursor": "pointer"
    },
    "w3-dropdown-hover:hover w3-dropdown-content": {
        "display": "block",
        "zIndex": 1
    },
    "w3-dropdown-hover:first-child": {
        "backgroundColor": "#ccc",
        "color": "#000"
    },
    "w3-dropdown-click:hover": {
        "backgroundColor": "#ccc",
        "color": "#000"
    },
    "w3-dropdown-hover:hover > w3-button:first-child": {
        "backgroundColor": "#ccc",
        "color": "#000"
    },
    "w3-dropdown-click:hover > w3-button:first-child": {
        "backgroundColor": "#ccc",
        "color": "#000"
    },
    "w3-dropdown-content": {
        "cursor": "auto",
        "color": "#000",
        "backgroundColor": "#fff",
        "display": "none",
        "position": "absolute",
        "minWidth": 160,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "w3-check": {
        "width": 24,
        "height": 24,
        "position": "relative",
        "top": 6
    },
    "w3-radio": {
        "width": 24,
        "height": 24,
        "position": "relative",
        "top": 6
    },
    "w3-sidebar": {
        "height": "100%",
        "width": 200,
        "backgroundColor": "#fff",
        "position": "fixed!important",
        "zIndex": 1,
        "overflow": "auto"
    },
    "w3-bar-block w3-dropdown-hover": {
        "width": "100%"
    },
    "w3-bar-block w3-dropdown-click": {
        "width": "100%"
    },
    "w3-bar-block w3-dropdown-hover w3-dropdown-content": {
        "minWidth": "100%"
    },
    "w3-bar-block w3-dropdown-click w3-dropdown-content": {
        "minWidth": "100%"
    },
    "w3-bar-block w3-dropdown-hover w3-button": {
        "width": "100%",
        "textAlign": "left",
        "paddingTop": 8,
        "paddingRight": 16,
        "paddingBottom": 8,
        "paddingLeft": 16
    },
    "w3-bar-block w3-dropdown-click w3-button": {
        "width": "100%",
        "textAlign": "left",
        "paddingTop": 8,
        "paddingRight": 16,
        "paddingBottom": 8,
        "paddingLeft": 16
    },
    "w3-main": {
        "transition": "margin-left .4s"
    },
    "w3-modal": {
        "zIndex": 3,
        "display": "none",
        "paddingTop": 100,
        "position": "fixed",
        "left": 0,
        "top": 0,
        "width": "100%",
        "height": "100%",
        "overflow": "auto",
        "backgroundColor": "rgba(0,0,0,0.4)"
    },
    "w3-modal-content": {
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "backgroundColor": "#fff",
        "position": "relative",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "outline": 0,
        "width": 600
    },
    "w3-bar": {
        "width": "100%",
        "overflow": "hidden"
    },
    "w3-center w3-bar": {
        "display": "inline-block",
        "width": "auto"
    },
    "w3-bar w3-bar-item": {
        "paddingTop": 8,
        "paddingRight": 16,
        "paddingBottom": 8,
        "paddingLeft": 16,
        "float": "left",
        "width": "auto",
        "border": "none",
        "outline": "none",
        "display": "block"
    },
    "w3-bar w3-dropdown-hover": {
        "position": "static",
        "float": "left"
    },
    "w3-bar w3-dropdown-click": {
        "position": "static",
        "float": "left"
    },
    "w3-bar w3-button": {
        "whiteSpace": "normal"
    },
    "w3-bar-block w3-bar-item": {
        "width": "100%",
        "display": "block",
        "paddingTop": 8,
        "paddingRight": 16,
        "paddingBottom": 8,
        "paddingLeft": 16,
        "textAlign": "left",
        "border": "none",
        "outline": "none",
        "whiteSpace": "normal",
        "float": "none"
    },
    "w3-bar-blockw3-center w3-bar-item": {
        "textAlign": "center"
    },
    "w3-block": {
        "display": "block",
        "width": "100%"
    },
    "w3-responsive": {
        "overflowX": "auto"
    },
    "w3-container:after": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "w3-container:before": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "w3-panel:after": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "w3-panel:before": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "w3-row:after": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "w3-row:before": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "w3-row-padding:after": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "w3-row-padding:before": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "w3-cell-row:before": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "w3-cell-row:after": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "w3-clear:after": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "w3-clear:before": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "w3-bar:before": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "w3-bar:after": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "w3-col": {
        "float": "left",
        "width": "100%"
    },
    "w3-half": {
        "float": "left",
        "width": "100%"
    },
    "w3-third": {
        "float": "left",
        "width": "100%"
    },
    "w3-twothird": {
        "float": "left",
        "width": "100%"
    },
    "w3-threequarter": {
        "float": "left",
        "width": "100%"
    },
    "w3-quarter": {
        "float": "left",
        "width": "100%"
    },
    "w3-cols1": {
        "width": "8.33333%"
    },
    "w3-cols2": {
        "width": "16.66666%"
    },
    "w3-cols3": {
        "width": "24.99999%"
    },
    "w3-cols4": {
        "width": "33.33333%"
    },
    "w3-cols5": {
        "width": "41.66666%"
    },
    "w3-cols6": {
        "width": "49.99999%"
    },
    "w3-cols7": {
        "width": "58.33333%"
    },
    "w3-cols8": {
        "width": "66.66666%"
    },
    "w3-cols9": {
        "width": "74.99999%"
    },
    "w3-cols10": {
        "width": "83.33333%"
    },
    "w3-cols11": {
        "width": "91.66666%"
    },
    "w3-cols12": {
        "width": "99.99999%"
    },
    "w3-content": {
        "maxWidth": 980,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto"
    },
    "w3-rest": {
        "overflow": "hidden"
    },
    "w3-cell-row": {
        "display": "table",
        "width": "100%"
    },
    "w3-cell": {
        "display": "table-cell"
    },
    "w3-cell-top": {
        "verticalAlign": "top"
    },
    "w3-cell-middle": {
        "verticalAlign": "middle"
    },
    "w3-cell-bottom": {
        "verticalAlign": "bottom"
    },
    "w3-hide": {
        "display": "none!important"
    },
    "w3-show-block": {
        "display": "block!important"
    },
    "w3-show": {
        "display": "block!important"
    },
    "w3-show-inline-block": {
        "display": "inline-block!important"
    },
    "w3-top": {
        "position": "fixed",
        "width": "100%",
        "zIndex": 1,
        "top": 0
    },
    "w3-bottom": {
        "position": "fixed",
        "width": "100%",
        "zIndex": 1,
        "bottom": 0
    },
    "w3-overlay": {
        "position": "fixed",
        "display": "none",
        "width": "100%",
        "height": "100%",
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "backgroundColor": "rgba(0,0,0,0.5)",
        "zIndex": 2
    },
    "w3-display-topleft": {
        "position": "absolute",
        "left": 0,
        "top": 0
    },
    "w3-display-topright": {
        "position": "absolute",
        "right": 0,
        "top": 0
    },
    "w3-display-bottomleft": {
        "position": "absolute",
        "left": 0,
        "bottom": 0
    },
    "w3-display-bottomright": {
        "position": "absolute",
        "right": 0,
        "bottom": 0
    },
    "w3-display-middle": {
        "position": "absolute",
        "top": "50%",
        "left": "50%",
        "transform": "translate(-50%,-50%)",
        "MsTransform": "translate(-50%,-50%)"
    },
    "w3-display-left": {
        "position": "absolute",
        "top": "50%",
        "left": "0%",
        "transform": "translate(0%,-50%)",
        "MsTransform": "translate(-0%,-50%)"
    },
    "w3-display-right": {
        "position": "absolute",
        "top": "50%",
        "right": "0%",
        "transform": "translate(0%,-50%)",
        "MsTransform": "translate(0%,-50%)"
    },
    "w3-display-topmiddle": {
        "position": "absolute",
        "left": "50%",
        "top": 0,
        "transform": "translate(-50%,0%)",
        "MsTransform": "translate(-50%,0%)"
    },
    "w3-display-bottommiddle": {
        "position": "absolute",
        "left": "50%",
        "bottom": 0,
        "transform": "translate(-50%,0%)",
        "MsTransform": "translate(-50%,0%)"
    },
    "w3-display-container:hover w3-display-hover": {
        "display": "block"
    },
    "w3-display-container:hover spanw3-display-hover": {
        "display": "inline-block"
    },
    "w3-display-hover": {
        "display": "none"
    },
    "w3-display-position": {
        "position": "absolute"
    },
    "w3-circle": {
        "borderRadius": "50%"
    },
    "w3-round-small": {
        "borderRadius": 2
    },
    "w3-round": {
        "borderRadius": 4
    },
    "w3-round-medium": {
        "borderRadius": 4
    },
    "w3-round-large": {
        "borderRadius": 8
    },
    "w3-round-xlarge": {
        "borderRadius": 16
    },
    "w3-round-xxlarge": {
        "borderRadius": 32
    },
    "w3-row-padding": {
        "paddingTop": 0,
        "paddingRight": 8,
        "paddingBottom": 0,
        "paddingLeft": 8
    },
    "w3-row-padding>w3-half": {
        "paddingTop": 0,
        "paddingRight": 8,
        "paddingBottom": 0,
        "paddingLeft": 8
    },
    "w3-row-padding>w3-third": {
        "paddingTop": 0,
        "paddingRight": 8,
        "paddingBottom": 0,
        "paddingLeft": 8
    },
    "w3-row-padding>w3-twothird": {
        "paddingTop": 0,
        "paddingRight": 8,
        "paddingBottom": 0,
        "paddingLeft": 8
    },
    "w3-row-padding>w3-threequarter": {
        "paddingTop": 0,
        "paddingRight": 8,
        "paddingBottom": 0,
        "paddingLeft": 8
    },
    "w3-row-padding>w3-quarter": {
        "paddingTop": 0,
        "paddingRight": 8,
        "paddingBottom": 0,
        "paddingLeft": 8
    },
    "w3-row-padding>w3-col": {
        "paddingTop": 0,
        "paddingRight": 8,
        "paddingBottom": 0,
        "paddingLeft": 8
    },
    "w3-container": {
        "paddingTop": 0.01,
        "paddingRight": 16,
        "paddingBottom": 0.01,
        "paddingLeft": 16
    },
    "w3-panel": {
        "paddingTop": 0.01,
        "paddingRight": 16,
        "paddingBottom": 0.01,
        "paddingLeft": 16,
        "marginTop": 16,
        "marginBottom": 16
    },
    "w3-code": {
        "fontFamily": "Consolas,\"courier new\"",
        "fontSize": 16,
        "width": "auto",
        "backgroundColor": "#fff",
        "paddingTop": 8,
        "paddingRight": 12,
        "paddingBottom": 8,
        "paddingLeft": 12,
        "borderLeft": "4px solid #4CAF50",
        "wordWrap": "break-word",
        "marginTop": "16px!important",
        "marginBottom": "16px!important"
    },
    "w3-codespan": {
        "fontFamily": "Consolas,\"courier new\"",
        "fontSize": "110%",
        "color": "crimson",
        "backgroundColor": "#f1f1f1",
        "paddingLeft": 4,
        "paddingRight": 4
    },
    "w3-card": {
        "boxShadow": "0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)"
    },
    "w3-card-2": {
        "boxShadow": "0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)"
    },
    "w3-card-4": {
        "boxShadow": "0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19)"
    },
    "w3-hover-shadow:hover": {
        "boxShadow": "0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19)"
    },
    "w3-spin": {
        "animation": "w3-spin 2s infinite linear"
    },
    "w3-animate-fading": {
        "animation": "fading 10s infinite"
    },
    "w3-animate-opacity": {
        "animation": "opac 0.8s"
    },
    "w3-animate-top": {
        "position": "relative",
        "animation": "animatetop 0.4s"
    },
    "w3-animate-left": {
        "position": "relative",
        "animation": "animateleft 0.4s"
    },
    "w3-animate-right": {
        "position": "relative",
        "animation": "animateright 0.4s"
    },
    "w3-animate-bottom": {
        "position": "relative",
        "animation": "animatebottom 0.4s"
    },
    "w3-animate-zoom": {
        "animation": "animatezoom 0.6s"
    },
    "w3-animate-input": {
        "transition": "width 0.4s ease-in-out"
    },
    "w3-animate-input:focus": {
        "width": "100%!important"
    },
    "w3-opacity": {
        "opacity": 0.6
    },
    "w3-hover-opacity:hover": {
        "opacity": 0.6
    },
    "w3-opacity-off": {
        "opacity": 1
    },
    "w3-hover-opacity-off:hover": {
        "opacity": 1
    },
    "w3-opacity-max": {
        "opacity": 0.25
    },
    "w3-opacity-min": {
        "opacity": 0.75
    },
    "w3-greyscale-max": {
        "filter": "grayscale(100%)"
    },
    "w3-grayscale-max": {
        "filter": "grayscale(100%)"
    },
    "w3-hover-greyscale:hover": {
        "filter": "grayscale(100%)"
    },
    "w3-hover-grayscale:hover": {
        "filter": "grayscale(100%)"
    },
    "w3-greyscale": {
        "filter": "grayscale(75%)"
    },
    "w3-grayscale": {
        "filter": "grayscale(75%)"
    },
    "w3-greyscale-min": {
        "filter": "grayscale(50%)"
    },
    "w3-grayscale-min": {
        "filter": "grayscale(50%)"
    },
    "w3-sepia": {
        "filter": "sepia(75%)"
    },
    "w3-sepia-max": {
        "filter": "sepia(100%)"
    },
    "w3-hover-sepia:hover": {
        "filter": "sepia(100%)"
    },
    "w3-sepia-min": {
        "filter": "sepia(50%)"
    },
    "w3-tiny": {
        "fontSize": "10px!important"
    },
    "w3-small": {
        "fontSize": "12px!important"
    },
    "w3-medium": {
        "fontSize": "15px!important"
    },
    "w3-large": {
        "fontSize": "18px!important"
    },
    "w3-xlarge": {
        "fontSize": "24px!important"
    },
    "w3-xxlarge": {
        "fontSize": "36px!important"
    },
    "w3-xxxlarge": {
        "fontSize": "48px!important"
    },
    "w3-jumbo": {
        "fontSize": "64px!important"
    },
    "w3-left-align": {
        "textAlign": "left!important"
    },
    "w3-right-align": {
        "textAlign": "right!important"
    },
    "w3-justify": {
        "textAlign": "justify!important"
    },
    "w3-center": {
        "textAlign": "center!important"
    },
    "w3-border-0": {
        "border": "0!important"
    },
    "w3-border": {
        "border": "1px solid #ccc!important"
    },
    "w3-border-top": {
        "borderTop": "1px solid #ccc!important"
    },
    "w3-border-bottom": {
        "borderBottom": "1px solid #ccc!important"
    },
    "w3-border-left": {
        "borderLeft": "1px solid #ccc!important"
    },
    "w3-border-right": {
        "borderRight": "1px solid #ccc!important"
    },
    "w3-topbar": {
        "borderTop": "6px solid #ccc!important"
    },
    "w3-bottombar": {
        "borderBottom": "6px solid #ccc!important"
    },
    "w3-leftbar": {
        "borderLeft": "6px solid #ccc!important"
    },
    "w3-rightbar": {
        "borderRight": "6px solid #ccc!important"
    },
    "w3-section": {
        "marginTop": "16px!important",
        "marginBottom": "16px!important"
    },
    "w3-margin": {
        "marginTop": "16px!important",
        "marginRight": "16px!important",
        "marginBottom": "16px!important",
        "marginLeft": "16px!important"
    },
    "w3-margin-top": {
        "marginTop": "16px!important"
    },
    "w3-margin-bottom": {
        "marginBottom": "16px!important"
    },
    "w3-margin-left": {
        "marginLeft": "16px!important"
    },
    "w3-margin-right": {
        "marginRight": "16px!important"
    },
    "w3-padding-small": {
        "paddingTop": 4,
        "paddingRight": "8px!important",
        "paddingBottom": 4,
        "paddingLeft": "8px!important"
    },
    "w3-padding": {
        "paddingTop": 8,
        "paddingRight": "16px!important",
        "paddingBottom": 8,
        "paddingLeft": "16px!important"
    },
    "w3-padding-large": {
        "paddingTop": 12,
        "paddingRight": "24px!important",
        "paddingBottom": 12,
        "paddingLeft": "24px!important"
    },
    "w3-padding-16": {
        "paddingTop": "16px!important",
        "paddingBottom": "16px!important"
    },
    "w3-padding-24": {
        "paddingTop": "24px!important",
        "paddingBottom": "24px!important"
    },
    "w3-padding-32": {
        "paddingTop": "32px!important",
        "paddingBottom": "32px!important"
    },
    "w3-padding-48": {
        "paddingTop": "48px!important",
        "paddingBottom": "48px!important"
    },
    "w3-padding-64": {
        "paddingTop": "64px!important",
        "paddingBottom": "64px!important"
    },
    "w3-left": {
        "float": "left!important"
    },
    "w3-right": {
        "float": "right!important"
    },
    "w3-button:hover": {
        "color": "#000!important",
        "backgroundColor": "#ccc!important"
    },
    "w3-transparent": {
        "backgroundColor": "transparent!important"
    },
    "w3-hover-none:hover": {
        "backgroundColor": "transparent!important",
        "boxShadow": "none!important"
    },
    "w3-amber": {
        "color": "#000!important",
        "backgroundColor": "#ffc107!important"
    },
    "w3-hover-amber:hover": {
        "color": "#000!important",
        "backgroundColor": "#ffc107!important"
    },
    "w3-aqua": {
        "color": "#000!important",
        "backgroundColor": "#00ffff!important"
    },
    "w3-hover-aqua:hover": {
        "color": "#000!important",
        "backgroundColor": "#00ffff!important"
    },
    "w3-blue": {
        "color": "#fff!important",
        "backgroundColor": "#2196F3!important"
    },
    "w3-hover-blue:hover": {
        "color": "#fff!important",
        "backgroundColor": "#2196F3!important"
    },
    "w3-light-blue": {
        "color": "#000!important",
        "backgroundColor": "#87CEEB!important"
    },
    "w3-hover-light-blue:hover": {
        "color": "#000!important",
        "backgroundColor": "#87CEEB!important"
    },
    "w3-brown": {
        "color": "#fff!important",
        "backgroundColor": "#795548!important"
    },
    "w3-hover-brown:hover": {
        "color": "#fff!important",
        "backgroundColor": "#795548!important"
    },
    "w3-cyan": {
        "color": "#000!important",
        "backgroundColor": "#00bcd4!important"
    },
    "w3-hover-cyan:hover": {
        "color": "#000!important",
        "backgroundColor": "#00bcd4!important"
    },
    "w3-blue-grey": {
        "color": "#fff!important",
        "backgroundColor": "#607d8b!important"
    },
    "w3-hover-blue-grey:hover": {
        "color": "#fff!important",
        "backgroundColor": "#607d8b!important"
    },
    "w3-blue-gray": {
        "color": "#fff!important",
        "backgroundColor": "#607d8b!important"
    },
    "w3-hover-blue-gray:hover": {
        "color": "#fff!important",
        "backgroundColor": "#607d8b!important"
    },
    "w3-green": {
        "color": "#fff!important",
        "backgroundColor": "#4CAF50!important"
    },
    "w3-hover-green:hover": {
        "color": "#fff!important",
        "backgroundColor": "#4CAF50!important"
    },
    "w3-light-green": {
        "color": "#000!important",
        "backgroundColor": "#8bc34a!important"
    },
    "w3-hover-light-green:hover": {
        "color": "#000!important",
        "backgroundColor": "#8bc34a!important"
    },
    "w3-indigo": {
        "color": "#fff!important",
        "backgroundColor": "#3f51b5!important"
    },
    "w3-hover-indigo:hover": {
        "color": "#fff!important",
        "backgroundColor": "#3f51b5!important"
    },
    "w3-khaki": {
        "color": "#000!important",
        "backgroundColor": "#f0e68c!important"
    },
    "w3-hover-khaki:hover": {
        "color": "#000!important",
        "backgroundColor": "#f0e68c!important"
    },
    "w3-lime": {
        "color": "#000!important",
        "backgroundColor": "#cddc39!important"
    },
    "w3-hover-lime:hover": {
        "color": "#000!important",
        "backgroundColor": "#cddc39!important"
    },
    "w3-orange": {
        "color": "#000!important",
        "backgroundColor": "#ff9800!important"
    },
    "w3-hover-orange:hover": {
        "color": "#000!important",
        "backgroundColor": "#ff9800!important"
    },
    "w3-deep-orange": {
        "color": "#fff!important",
        "backgroundColor": "#ff5722!important"
    },
    "w3-hover-deep-orange:hover": {
        "color": "#fff!important",
        "backgroundColor": "#ff5722!important"
    },
    "w3-pink": {
        "color": "#fff!important",
        "backgroundColor": "#e91e63!important"
    },
    "w3-hover-pink:hover": {
        "color": "#fff!important",
        "backgroundColor": "#e91e63!important"
    },
    "w3-purple": {
        "color": "#fff!important",
        "backgroundColor": "#9c27b0!important"
    },
    "w3-hover-purple:hover": {
        "color": "#fff!important",
        "backgroundColor": "#9c27b0!important"
    },
    "w3-deep-purple": {
        "color": "#fff!important",
        "backgroundColor": "#673ab7!important"
    },
    "w3-hover-deep-purple:hover": {
        "color": "#fff!important",
        "backgroundColor": "#673ab7!important"
    },
    "w3-red": {
        "color": "#fff!important",
        "backgroundColor": "#f44336!important"
    },
    "w3-hover-red:hover": {
        "color": "#fff!important",
        "backgroundColor": "#f44336!important"
    },
    "w3-sand": {
        "color": "#000!important",
        "backgroundColor": "#fdf5e6!important"
    },
    "w3-hover-sand:hover": {
        "color": "#000!important",
        "backgroundColor": "#fdf5e6!important"
    },
    "w3-teal": {
        "color": "#fff!important",
        "backgroundColor": "#009688!important"
    },
    "w3-hover-teal:hover": {
        "color": "#fff!important",
        "backgroundColor": "#009688!important"
    },
    "w3-yellow": {
        "color": "#000!important",
        "backgroundColor": "#ffeb3b!important"
    },
    "w3-hover-yellow:hover": {
        "color": "#000!important",
        "backgroundColor": "#ffeb3b!important"
    },
    "w3-white": {
        "color": "#000!important",
        "backgroundColor": "#fff!important"
    },
    "w3-hover-white:hover": {
        "color": "#000!important",
        "backgroundColor": "#fff!important"
    },
    "w3-black": {
        "color": "#fff!important",
        "backgroundColor": "#000!important"
    },
    "w3-hover-black:hover": {
        "color": "#fff!important",
        "backgroundColor": "#000!important"
    },
    "w3-grey": {
        "color": "#000!important",
        "backgroundColor": "#bbb!important"
    },
    "w3-hover-grey:hover": {
        "color": "#000!important",
        "backgroundColor": "#bbb!important"
    },
    "w3-gray": {
        "color": "#000!important",
        "backgroundColor": "#bbb!important"
    },
    "w3-hover-gray:hover": {
        "color": "#000!important",
        "backgroundColor": "#bbb!important"
    },
    "w3-light-grey": {
        "color": "#000!important",
        "backgroundColor": "#f1f1f1!important"
    },
    "w3-hover-light-grey:hover": {
        "color": "#000!important",
        "backgroundColor": "#f1f1f1!important"
    },
    "w3-light-gray": {
        "color": "#000!important",
        "backgroundColor": "#f1f1f1!important"
    },
    "w3-hover-light-gray:hover": {
        "color": "#000!important",
        "backgroundColor": "#f1f1f1!important"
    },
    "w3-dark-grey": {
        "color": "#fff!important",
        "backgroundColor": "#616161!important"
    },
    "w3-hover-dark-grey:hover": {
        "color": "#fff!important",
        "backgroundColor": "#616161!important"
    },
    "w3-dark-gray": {
        "color": "#fff!important",
        "backgroundColor": "#616161!important"
    },
    "w3-hover-dark-gray:hover": {
        "color": "#fff!important",
        "backgroundColor": "#616161!important"
    },
    "w3-pale-red": {
        "color": "#000!important",
        "backgroundColor": "#ffdddd!important"
    },
    "w3-hover-pale-red:hover": {
        "color": "#000!important",
        "backgroundColor": "#ffdddd!important"
    },
    "w3-pale-green": {
        "color": "#000!important",
        "backgroundColor": "#ddffdd!important"
    },
    "w3-hover-pale-green:hover": {
        "color": "#000!important",
        "backgroundColor": "#ddffdd!important"
    },
    "w3-pale-yellow": {
        "color": "#000!important",
        "backgroundColor": "#ffffcc!important"
    },
    "w3-hover-pale-yellow:hover": {
        "color": "#000!important",
        "backgroundColor": "#ffffcc!important"
    },
    "w3-pale-blue": {
        "color": "#000!important",
        "backgroundColor": "#ddffff!important"
    },
    "w3-hover-pale-blue:hover": {
        "color": "#000!important",
        "backgroundColor": "#ddffff!important"
    },
    "w3-text-red": {
        "color": "#f44336!important"
    },
    "w3-hover-text-red:hover": {
        "color": "#f44336!important"
    },
    "w3-text-green": {
        "color": "#4CAF50!important"
    },
    "w3-hover-text-green:hover": {
        "color": "#4CAF50!important"
    },
    "w3-text-blue": {
        "color": "#2196F3!important"
    },
    "w3-hover-text-blue:hover": {
        "color": "#2196F3!important"
    },
    "w3-text-yellow": {
        "color": "#ffeb3b!important"
    },
    "w3-hover-text-yellow:hover": {
        "color": "#ffeb3b!important"
    },
    "w3-text-white": {
        "color": "#fff!important"
    },
    "w3-hover-text-white:hover": {
        "color": "#fff!important"
    },
    "w3-text-black": {
        "color": "#000!important"
    },
    "w3-hover-text-black:hover": {
        "color": "#000!important"
    },
    "w3-text-grey": {
        "color": "#757575!important"
    },
    "w3-hover-text-grey:hover": {
        "color": "#757575!important"
    },
    "w3-text-gray": {
        "color": "#757575!important"
    },
    "w3-hover-text-gray:hover": {
        "color": "#757575!important"
    },
    "w3-text-amber": {
        "color": "#ffc107!important"
    },
    "w3-text-aqua": {
        "color": "#00ffff!important"
    },
    "w3-text-light-blue": {
        "color": "#87CEEB!important"
    },
    "w3-text-brown": {
        "color": "#795548!important"
    },
    "w3-text-cyan": {
        "color": "#00bcd4!important"
    },
    "w3-text-blue-grey": {
        "color": "#607d8b!important"
    },
    "w3-text-blue-gray": {
        "color": "#607d8b!important"
    },
    "w3-text-light-green": {
        "color": "#8bc34a!important"
    },
    "w3-text-indigo": {
        "color": "#3f51b5!important"
    },
    "w3-text-khaki": {
        "color": "#b4aa50!important"
    },
    "w3-text-lime": {
        "color": "#cddc39!important"
    },
    "w3-text-orange": {
        "color": "#ff9800!important"
    },
    "w3-text-deep-orange": {
        "color": "#ff5722!important"
    },
    "w3-text-pink": {
        "color": "#e91e63!important"
    },
    "w3-text-purple": {
        "color": "#9c27b0!important"
    },
    "w3-text-deep-purple": {
        "color": "#673ab7!important"
    },
    "w3-text-sand": {
        "color": "#fdf5e6!important"
    },
    "w3-text-teal": {
        "color": "#009688!important"
    },
    "w3-text-light-grey": {
        "color": "#f1f1f1!important"
    },
    "w3-hover-text-light-grey:hover": {
        "color": "#f1f1f1!important"
    },
    "w3-text-light-gray": {
        "color": "#f1f1f1!important"
    },
    "w3-hover-text-light-gray:hover": {
        "color": "#f1f1f1!important"
    },
    "w3-text-dark-grey": {
        "color": "#3a3a3a!important"
    },
    "w3-hover-text-dark-grey:hover": {
        "color": "#3a3a3a!important"
    },
    "w3-text-dark-gray": {
        "color": "#3a3a3a!important"
    },
    "w3-hover-text-dark-gray:hover": {
        "color": "#3a3a3a!important"
    },
    "w3-border-red": {
        "borderColor": "#f44336!important"
    },
    "w3-hover-border-red:hover": {
        "borderColor": "#f44336!important"
    },
    "w3-border-green": {
        "borderColor": "#4CAF50!important"
    },
    "w3-hover-border-green:hover": {
        "borderColor": "#4CAF50!important"
    },
    "w3-border-blue": {
        "borderColor": "#2196F3!important"
    },
    "w3-hover-border-blue:hover": {
        "borderColor": "#2196F3!important"
    },
    "w3-border-yellow": {
        "borderColor": "#ffeb3b!important"
    },
    "w3-hover-border-yellow:hover": {
        "borderColor": "#ffeb3b!important"
    },
    "w3-border-white": {
        "borderColor": "#fff!important"
    },
    "w3-hover-border-white:hover": {
        "borderColor": "#fff!important"
    },
    "w3-border-black": {
        "borderColor": "#000!important"
    },
    "w3-hover-border-black:hover": {
        "borderColor": "#000!important"
    },
    "w3-border-grey": {
        "borderColor": "#bbb!important"
    },
    "w3-hover-border-grey:hover": {
        "borderColor": "#bbb!important"
    },
    "w3-border-gray": {
        "borderColor": "#bbb!important"
    },
    "w3-hover-border-gray:hover": {
        "borderColor": "#bbb!important"
    }
});