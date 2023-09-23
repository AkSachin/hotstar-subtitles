//credits : https://stackoverflow.com/users/938089/rob-w

var code = `
.shaka-text-container span {
    background-color: transparent !important;
    font-size: 28px !important;
    line-height: normal !important;
    font-weight: bolder !important;
    color: #ffffff !important;
    text-shadow: #000000 0px 0px 7px !important;
    font-family: Netflix Sans,Helvetica Nueue,Helvetica,Arial,sans-serif !important;
}
`;

var script = document.createElement('style');
script.textContent = code;
(document.head||document.documentElement).appendChild(script);
//script.remove();