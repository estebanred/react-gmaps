import React from 'react';
import fire from '../fire';

class FormularioFirebase extends React.Component {

    constructor() {
        super();

        this.state = {    
            name: "",
            description: "",
            id: "",
            approved: false
        };
        this.handleName = this.handleName.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleID = this.handleID.bind(this);
    }

    handleName(e) {
        this.setState({name: e.target.value});
    }

    handleDescription(e) {
        this.setState({description: e.target.value});
    }

    handleID(e) {
        this.setState({id: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const name = this.state.name;
        const description = this.state.description;
        const id = this.state.id;
        const latitude = this.props.Latitude;
        const longitude = this.props.Longitude;

        const newData = {
            Name: name,
            Description: description,
            Id: id,
            Latitude: latitude,
            Longitude: longitude
        };
        
        fire.database().ref('users/' + newData.Id).set(newData);
        alert("ADDED")
    }

    render() {
        return (
            <div>
                <h1>¿Donde estás?</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="uk-margin">
                        <input type="text" className="uk-input" placeholder="Nombre" onChange={this.handleName} />
                    </div>
                    <div className="uk-margin">
                        <input type="text" className="uk-input" placeholder="Carrera" onChange={this.handleDescription} />
                    </div>
                    <div className="uk-margin">
                        <input type="text" className="uk-input" placeholder="ID/Matricula" onChange={this.handleID} />
                    </div>
                    <div className="uk-margin">
                        <input type="text" value={this.props.Latitude} className="uk-input" placeholder="Latitud" disabled />
                    </div>
                    <div className="uk-margin">
                        <input type="text" value={this.props.Longitude} className="uk-input" placeholder="Longitud" disabled />
                    </div>
                    <input type="submit" value="Agregar" className="uk-button" />
                </form>
            </div>
        );
    }
}

export default FormularioFirebase;