let max = 0;
var procesos = [];
const lineas = [
    "a = 1 + 2",
    "b = 3 + 4",
    "c = 5 + 6",
    "console.log(a)",
    "console.log(c)",
    "console.log('1 + 2')",
    "console.log('3 + 4')",
    "console.log('5 + 6')"
    ];

    const a = prompt("Numero de procesos a realizar:");

main();
    
function Proceso(id, codigo)
{
    this.id = id;
    this.codigo = codigo;
}

function elegirLineas(reps)
{
    for(let i = 0; i < reps; i++)
    {
        let cantLineas = Math.floor(Math.random()*3) + 3;
        var linea = [];
        for(let i = 0; i < cantLineas; i++)
        {
            linea.push(lineas[Math.floor(Math.random()*8)]);
        }
        var proceso = new Proceso(i+1, linea);
        procesos.push(proceso);
    }
    for(let j = 0; j < reps; j++)
    {
        if(procesos[j].codigo.length > max)
        {
            max = procesos[j].codigo.length;
        }
    }
}

function simul(a)
{
    for(let i = 0; i < max; i++)
    {
        for(let j = 0; j < a; j++)
        {
            document.write("<br>Proceso: " + procesos[j].id);
            if(procesos[j].codigo[i]===undefined)
            {
                document.write("<br>Terminado<br>")
            }
            else
            {
                document.write("<br>Linea de codigo: " + procesos[j].codigo[i] + "<br>");
            }
        }
    }
}

function main()
{
    document.write("Procesos a realizar: " + a + "<br>");
    elegirLineas(a);
    simul(a);
}

