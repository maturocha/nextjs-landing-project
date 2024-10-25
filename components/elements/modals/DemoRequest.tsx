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
}

interface Props {
	title?: string;
	subtitle?: string;
	plan?: string;
	type?: "create" | "participate";
	hash?: string;
	className?: string;
	values?: DemoData;
	closeModal: () => void;
	setMessage: (any: any) => void;
	setResults?: (any: any) => void;
}

function DemoRequest({
	title,
	subtitle,
	plan,
	type = "create",
	hash,
	values,
	className = "",
	closeModal,
	setMessage,
	setResults,
}: Props) {
	
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [formData, setFormData] = useState<DemoData>({
		name: "",
		lastname: "",
		organization: "",
		position: "",
		email: "",
		phone: "",
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		setLoading(true);

		const res = await fetch(`/api/contact/request-demo`, {
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
			});

		setLoading(false);

		closeModal();
	};

	return (
		<Modal closeModal={closeModal} theme="white">
			<div className='flex flex-col space-y-8 px-12 py-8'>
				<div className="flex flex-col space-y-2">
					<h2 className='text-2xl font-semibold text-blue-purple'>Plan: {plan}</h2>
					<h3 className='text-3xl font-bold text-primary'>
						¡Solicita tu demo de TRCSports!
					</h3>
					<h4 className='text-gray-600'>
						Completá tus datos y nuestro equipo se contactará a la brevedad.
					</h4>
				</div>

				<form className='flex flex-col space-y-6 text-primary' onSubmit={handleSubmit}>
					<div className='grid md:grid-cols-2 gap-2'>
						<InputForm
							type='text'
							name='name'
							placeholder='Nombre'
							className="text-primary"
							required={true}
							disabled={loading}
							value={formData.name}
							onChange={(e) =>
								setFormData({ ...formData, [e.target.name]: e.target.value })
							}
						/>

						<InputForm
							type='text'
							name='lastname'
							placeholder='Apellido'
							className="text-primary"
							required={true}
							disabled={loading}
							value={formData.lastname}
							onChange={(e) =>
								setFormData({ ...formData, [e.target.name]: e.target.value })
							}
						/>

						<InputForm
							type='text'
							className="text-primary"
							name='organization'
							placeholder='Organización'
							required={true}
							disabled={loading}
							value={formData.organization}
							onChange={(e) =>
								setFormData({ ...formData, [e.target.name]: e.target.value })
							}
						/>

						<InputForm
							type='text'
							name='position'
							placeholder='Cargo'
							className="text-primary"
							required={true}
							disabled={loading}
							value={formData.position}
							onChange={(e) =>
								setFormData({ ...formData, [e.target.name]: e.target.value })
							}
						/>

						<InputForm
							type='email'
							name='email'
							placeholder='E-mail'
							className="text-primary"
							required={true}
							disabled={loading}
							value={formData.email}
							onChange={(e) =>
								setFormData({ ...formData, [e.target.name]: e.target.value })
							}
						/>

						<InputForm
							type='text'
							name='phone'
							className="text-primary"
							placeholder='Teléfono'
							required={true}
							disabled={loading}
							value={formData.phone}
							onChange={(e) =>
								setFormData({ ...formData, [e.target.name]: e.target.value })
							}
						/>
					</div>

					<Button
						className='mt-4'
						style='primary'
						disabled={
							loading ||
							formData.name == "" ||
							formData.lastname == "" ||
							formData.organization == "" ||
							formData.position == "" ||
							formData.email == "" ||
							formData.phone == ""
						}>
						<div className='flex space-x-2 items-center justify-center'>
							{loading ? (
								<>
									<Spinner />
									<span> Enviando...</span>
								</>
							) : (
								<span>Enviar</span>
							)}
						</div>
					</Button>
				</form>
			</div>
		</Modal>
	);
}

export default DemoRequest;
