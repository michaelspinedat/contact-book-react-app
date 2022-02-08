import React from 'react';

const ContactForm = () => {
    return (
        <div className="col-6 mt-3">
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Nombre
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="name"
                        name="name"
                        aria-describedby="emailHelp"
                        placeholder="Nombre"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="number" className="form-label">
                        Número
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="number"
                        name="number"
                        placeholder="Numero"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Agregar
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
