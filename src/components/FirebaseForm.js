import React from 'react';
import fire from '../fire';

class FormularioFirebase extends React.Component {
    constructor() {
        super();

        this.state = {
            name: "",
            description: "",
            id: "",
            latitude: "",
            longitude: "",
            approved: false,
        };

        this.resetFields = this.resetFields.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ latitude: nextProps.Latitude, longitude: nextProps.Longitude });
    }

    resetFields() {
        this.setState({
            name: "",
            description: "",
            id: "",
            latitude: "",
            longitude: "",
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const newData = {
            Name: this.state.name,
            Description: this.state.description,
            Id: this.state.id,
            Latitude: Number(this.props.Latitude),
            Longitude: Number(this.props.Longitude),
            approved: this.state.approved
        };

        fire.database().ref('users/' + newData.Id).set(newData);
        alert("The user was succesfully added");
        this.resetFields();
    }

    render() {
        return (
            <div>
                <h1>Graduate Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="uk-margin">
                        <input className="uk-input" placeholder="Nombre" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} required/>
                    </div>
                    <div className="uk-margin">
                        <input className="uk-input" placeholder="Carrera" value={this.state.description} onChange={e => this.setState({ description: e.target.value })} required/>
                    </div>
                    <div className="uk-margin">
                        <input className="uk-input" placeholder="ID/Matricula" value={this.state.id} onChange={e => this.setState({ id: e.target.value })} required/>
                    </div>
                    <div className="uk-margin">
                        <div className="uk-grid uk-child-width-1-2">
                            <div><input value={this.state.latitude} className="uk-input" placeholder="Latitude" disabled /></div>
                            <div><input value={this.state.longitude} className="uk-input" placeholder="Longitude" disabled /></div>
                        </div>
                        <div className="uk-alert-primary uk-alert"><label>Select your location by marking it on the map</label></div>
                    </div>
                    <div className="uk-grid uk-child-width-1-2">
                        <div><input type="submit" value="Submit" className="uk-button" /></div>
                        <div><input type="reset" className="uk-button" value="Reset" onClick={this.resetFields} /></div>
                    </div>
                </form>
            </div>
        );
    }
}

export default FormularioFirebase;