import React, { useState } from 'react';
import SelectList from './SelectList';

const SelectsAnidados = () => {
    const [state, setState] = useState("");
    const [town, setTown] = useState("");
    const [suburb, setSuburb] = useState("");

    let TOKEN = "d81a7ac7-976d-4e1e-b7d3-b1979d791b6c";
    return (
        <div>
            <h2>SELECTS ANIDADOS</h2>
            <h3>México</h3>
            <SelectList 
                title="estado" 
                url={`https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json`}
                hanldeChange={(e) => {setState(e.target.value)}}
            />
            {
                state && (
                    <SelectList 
                    title="municipios" 
                    url="" 
                    hanldeChange={(e) => {setTown(e.target.value)}}
                    />
                )
            }
            {
                town && (
                    <SelectList 
                    title="colonia" 
                    url="" 
                    hanldeChange={(e) => {setSuburb(e.target.value)}}
                    />
                )
            }
            
            
            <pre>
                <code>
                    {state} - {town} - {suburb}
                </code>
            </pre>
        </div>
    )
}

export default SelectsAnidados
