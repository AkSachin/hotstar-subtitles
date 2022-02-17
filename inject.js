//credits : https://stackoverflow.com/users/938089/rob-w

var code = `
.shaka-text-container span {
    background-color: transparent !important;
    font-size: 32px !important;
    text-shadow: 1px 1px 2px black;
}
`;

var script = document.createElement('style');
script.textContent = code;
(document.head||document.documentElement).appendChild(script);
//script.remove();