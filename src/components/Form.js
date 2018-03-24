import React from 'react';

class Form extends React.Component{
    render(){
        return(
            <div>
                <form action="">
                    <label for="date">Fecha</label>
                    <input type="date" name="date" /> 
                    <label for="state">Estado</label>
                    <input type="checkbox" value=":)" name="happy" />
                    <label for="state">:)</label>
                    <input type="checkbox" value=":(" name="sad" />
                    <label for="state">:(</label>
                    <label for="message">Mensaje</label>
                    <input placeholder="¿Por qué es un buen día?" type="text" name="message" />
                </form>
                <div>
                    <button>Guardar</button>
                    <button>Cancelar</button>
                </div>
            </div>
        );
    }
}

export default Form;