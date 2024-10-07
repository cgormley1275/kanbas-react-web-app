export default function VariablesAndConstants() {
    var functionScoped = 2;
    let blockscoped = 5;
    const constant1 = functionScoped - blockscoped;
    return (
        <div id="wd-variables-and-constants">
            <h4>Variables And Constants</h4>
            functionScoped = {functionScoped} <br />
            blockscoped = {blockscoped} <br />
            constant1 = {constant1} <hr />
        </div>
    )
}