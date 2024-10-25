"use client"

import { useState } from 'react';
import GeneralForm from '@/components/forms/GeneralForm';
import InputForm from '@/components/forms/ui/input';
import Spinner from '@/components/elements/ui/Spinner';

import Button from '@/components/elements/ui/Button';
import AlertModal from '@/components/elements/alert';

interface LoginData {
	name: string;
	lastname: string;
	organization: string;
	position: string;
	email: string;
	phone: string;
}

const ContactForm = () => {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [message, setMessage] = useState<any>(null)

  const [formData, setFormData] = useState<LoginData>({
    name: '',
    lastname: '',
    organization: '',
    position: '',
    email: '',
    phone: '',
  });


  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault()

    setLoading(true)

    const res = await fetch(`/api/contact`, {
      method: 'POST',
      body: JSON.stringify(formData)
    })

    const response = await res.json();


    setMessage({
      type: response.status == 'ok'? 'success' : 'error',
      message: response.message,
    })

    if (response.status == 'ok')
      setFormData({
        name: '',
        lastname: '',
        organization: '',
        position: '',
        email: '',
        phone: '',
      })

    setLoading(false)

  }

  return  <GeneralForm
            className="mx-auto md:max-w-screen-md text-primary shadow rounded-xl flex flex-col px-8 py-8 space-y-4"
            title="¿Interesado en nuesta propuesta?"
            subtitle="Déjanos tus datos y nuestro equipo te contactará para que charlemos!"
            onSubmit={handleSubmit}
            >

  <div className="grid gap-4">

    <InputForm
      type="text"
      name="name"
      placeholder="Nombre"
      className='text-primary'
      required={true}
      disabled={loading}
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
    />

    <InputForm
      type="text"
      className='text-primary'
      name="lastname"
      placeholder="Apellido"
      required={true}
      disabled={loading}
      value={formData.lastname}
      onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
    />

<InputForm
      type="text"
      className='text-primary'
      name="organization"
      placeholder="Organización"
      required={true}
      disabled={loading}
      value={formData.organization}
      onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
    />

    <InputForm
      type="text"
      className='text-primary'
      name="position"
      placeholder="Cargo"
      required={true}
      disabled={loading}
      value={formData.position}
      onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
    />

    <InputForm
      type="email"
      className='text-primary'
      name="email"
      placeholder="E-mail"
      required={true}
      disabled={loading}
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
    />

    <InputForm
      type="text"
      className='text-primary'
      name="phone"
      placeholder="Teléfono"
      required={true}
      disabled={loading}
      value={formData.phone}
      onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
    />

  </div>

    <Button
      className="mt-4"
      style="primary"
      disabled={loading || formData.name == '' || formData.lastname == '' || formData.organization == '' || formData.position == '' ||
                formData.email == '' || formData.phone == ''}>

        <div className="flex space-x-2 items-center justify-center">
          {loading ?
                <><Spinner /><span> Enviando...</span></>:
                <span>Enviar</span>
          } 
        </div>

        
    </Button>

    {message &&
            <AlertModal 
              closeModal={() => setMessage(null)}
              type={message.type}
              message={message.message}
              reload={false}
            />

          }

</GeneralForm>
};

export default ContactForm;
