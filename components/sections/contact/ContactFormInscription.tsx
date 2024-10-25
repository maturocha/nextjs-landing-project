"use client";

import {useState} from "react";
import axios from "axios";
import Form from '@/components/forms/Form';
import Input from "@/components/forms/InputForm";
import AlertModal from "@/components/elements/alert";

interface LoginData {
    name: string;
    lastname: string;
    organization: string;
    position: string;
    email: string;
    phone: string;
}

const ContactFormInscription = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<any>(null);
    const [emptyInput, setEmptyInput] = useState(false);

    const [formData, setFormData] = useState<LoginData>({
        name: "",
        lastname: "",
        organization: "",
        position: "",
        email: "",
        phone: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setEmptyInput(true);
        setLoading(true);

        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/contact`, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        setMessage({
            type: response.data.status == "ok" ? "success" : "error",
            message: response.data.message ? response.data.message : "Ha ocurrido un error en su solicitud. Por favor, intente más tarde.",
        });

        if (response.data.status == "ok")
            setFormData({
                name: "",
                lastname: "",
                organization: "",
                position: "",
                email: "",
                phone: "",
            });

        setEmptyInput(false);
        setLoading(false);
    };

    return (
        <div className="py-8 rounded-2xl flex-wrap w-full">
            <Form
            logo={false}
            onSubmit={handleSubmit}
            disabledButton={loading ||
                formData.name == "" ||
                formData.lastname == "" ||
                formData.organization == "" ||
                formData.position == "" ||
                formData.email == "" ||
                formData.phone == ""}
            buttonText="Enviar"
            loading={loading}>
                <div className='flex flex-wrap lg:flex-nowrap gap-4 lg:gap-4 lg:justify-between w-full'>
                <Input
                loading={loading}
                handleChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}
                type="text"
                name="name"
                placeholder="Nombre"
                value={formData.name}
                labelText="Nombre *"
                textWarning="Campo obligatorio."
                warningInput={emptyInput && formData.name === "" ? true : false}
                warningText={emptyInput && formData.name === "" ? true : false}
                widthCSS="w-full lg:w-1/2"
                />

                <Input
                loading={loading}
                handleChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}
                type="text"
                name="lastname"
                placeholder="Apellido"
                value={formData.lastname}
                labelText="Apellido *"
                textWarning="Campo obligatorio."
                warningInput={emptyInput && formData.lastname === "" ? true : false}
                warningText={emptyInput && formData.lastname === "" ? true : false}
                widthCSS="w-full lg:w-1/2"
                />
                </div>

                <Input
                loading={loading}
                handleChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}
                type="text"
                name="organization"
                placeholder="Organización"
                value={formData.organization}
                labelText="Organización *"
                textWarning="Campo obligatorio."
                warningInput={emptyInput && formData.organization === "" ? true : false}
                warningText={emptyInput && formData.organization === "" ? true : false}
                widthCSS="w-full"
                />

                <Input
                loading={loading}
                handleChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}
                type="text"
                name="position"
                placeholder="Cargo"
                value={formData.position}
                labelText="Cargo *"
                textWarning="Campo obligatorio."
                warningInput={emptyInput && formData.position === "" ? true : false}
                warningText={emptyInput && formData.position === "" ? true : false}
                widthCSS="w-full"
                />

                <Input
                loading={loading}
                handleChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={formData.email}
                labelText="Correo *"
                textWarning="Campo obligatorio."
                warningInput={emptyInput && formData.email === "" ? true : false}
                warningText={emptyInput && formData.email === "" ? true : false}
                widthCSS="w-full"
                />

                <Input
                loading={loading}
                handleChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}
                type="text"
                name="phone"
                placeholder="Teléfono"
                value={formData.phone}
                labelText="Teléfono *"
                textWarning="Campo obligatorio."
                warningInput={emptyInput && formData.phone === "" ? true : false}
                warningText={emptyInput && formData.phone === "" ? true : false}
                widthCSS="w-full"
                />

            {message && (
                <AlertModal
                    closeModal={() => setMessage(null)}
                    type={message.type}
                    message={message.message}
                    reload={false}
                />
            )}
        </Form>
        </div>
    );
};

export default ContactFormInscription;
