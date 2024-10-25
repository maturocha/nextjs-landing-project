import { useEffect, useRef, useState } from "react";

import Button from "@/components/elements/ui/Button";


import Spinner from "@/components/elements/ui/Spinner";

import Modal from "@/components/elements/modal";
import InputForm from "@/components/forms/ui/input";

interface DemoData {
  name: string;
  lastname: string;
  organization: string;
  position: string;
  email: string;
  phone: string;
  plan: string | undefined;
}

interface Props {
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
  closeModal: () => void;
  setMessage: (any: any) => void;
  setResults?: (any: any) => void;
}

function PlanRequest({
  title,
  subtitle,
  description,
  className = "",
  closeModal,
  setMessage,
  setResults,
}: Props) {
  const [gamesList, setGamesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState<DemoData>({
    name: "",
    lastname: "",
    organization: "",
    position: "",
    email: "",
    phone: "",
    plan: title,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    const data = { ...formData };
    data.plan = title;

    const res = await fetch(`/api/contact/request-plan`, {
      method: "POST",
      body: JSON.stringify(formData),
    });

    const response = await res.json();

    setMessage({
      type: response.status == "ok" ? "success" : "error",
      body: response.message,
      confirmText: "Aceptar",
      onConfirm: () => setMessage(null),
      onCancel: () => setMessage(null),
    });

    if (response.status == "ok")
      setFormData({
        name: "",
        lastname: "",
        organization: "",
        position: "",
        email: "",
        phone: "",
        plan: title,
      });

    setLoading(false);

    closeModal();
  };

  return (
    <Modal closeModal={closeModal} theme="white">
      <div className="flex flex-col space-y-4 px-12 py-8">
        <div>
          <h2 className="text-3xl font-bold text-primary">
            Plan elegido: {title}
          </h2>
          <h3 className="text-xl font-medium text-gray-600">{subtitle}</h3>
          <p className="text-base italic text-gray-600">{description}</p>
        </div>

        <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-2">
            <InputForm
              type="text"
              name="name"
              placeholder="Nombre"
              required={true}
              disabled={loading}
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
            />

            <InputForm
              type="text"
              name="lastname"
              placeholder="Apellido"
              required={true}
              disabled={loading}
              value={formData.lastname}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
            />

            <InputForm
              type="text"
              name="organization"
              placeholder="Organización"
              required={true}
              disabled={loading}
              value={formData.organization}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
            />

            <InputForm
              type="text"
              name="position"
              placeholder="Cargo"
              required={true}
              disabled={loading}
              value={formData.position}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
            />

            <InputForm
              type="email"
              name="email"
              placeholder="E-mail"
              required={true}
              disabled={loading}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
            />

            <InputForm
              type="text"
              name="phone"
              placeholder="Teléfono"
              required={true}
              disabled={loading}
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
            />
          </div>

          <Button
            className="mt-4"
            style="primary"
            disabled={
              loading ||
              formData.name == "" ||
              formData.lastname == "" ||
              formData.organization == "" ||
              formData.position == "" ||
              formData.email == "" ||
              formData.phone == ""
            }
          >
            <div className="flex space-x-2 items-center justify-center">
              {loading ? (
                <>
                  <Spinner />
                  <span> Solicitando...</span>
                </>
              ) : (
                <span>Solicitar</span>
              )}
            </div>
          </Button>
        </form>
      </div>
    </Modal>
  );
}

export default PlanRequest;
