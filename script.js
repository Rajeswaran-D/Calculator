function appendvalue(value)
{
    document.getElementById('display').value+=value;

}
function clearV()
{
    document.getElementById('display').value= " ";
}
function calculate()
{
    try
    {
        let r=eval(document.getElementById('display').value);
        document.getElementById('display').value=r;

    }
    catch(error)
    {
        document.getElementById('display').value='error';
    }
}