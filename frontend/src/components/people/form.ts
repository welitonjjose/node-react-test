import React from 'react';

interface PersonFormFieldsProps {
  formData: {
    name: string;
    cpf: string;
    birthDate: string;
    street: string;
    district: string;
    city: string;
    state: string;
    number: string;
    cep: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PersonFormFields: React.FC<PersonFormFieldsProps> = ({ formData, handleChange }) => {
  return (
    <>
    <div className= "mb-4" >
    <label htmlFor="name" className = "block text-sm font-medium text-gray-700" >
      Nome
      </label>
      < input
  id = "name"
  type = "text"
  name = "name"
  value = { formData.name }
  onChange = { handleChange }
  placeholder = "Digite o nome"
  className = "w-full p-3 mt-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  required
    />
    </div>
    < div className = "mb-4" >
      <label htmlFor="cpf" className = "block text-sm font-medium text-gray-700" >
        CPF
        </label>
        < input
  id = "cpf"
  type = "text"
  name = "cpf"
  value = { formData.cpf }
  onChange = { handleChange }
  placeholder = "Digite o CPF"
  className = "w-full p-3 mt-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  required
    />
    </div>
    < div className = "mb-4" >
      <label htmlFor="birthDate" className = "block text-sm font-medium text-gray-700" >
        Data de Nascimento
          </label>
          < input
  id = "birthDate"
  type = "date"
  name = "birthDate"
  value = { formData.birthDate }
  onChange = { handleChange }
  className = "w-full p-3 mt-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  required
    />
    </div>
    < div className = "mb-4" >
      <label htmlFor="street" className = "block text-sm font-medium text-gray-700" >
        Rua
        </label>
        < input
  id = "street"
  type = "text"
  name = "street"
  value = { formData.street }
  onChange = { handleChange }
  placeholder = "Digite a rua"
  className = "w-full p-3 mt-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  required
    />
    </div>
    < div className = "mb-4" >
      <label htmlFor="district" className = "block text-sm font-medium text-gray-700" >
        Bairro
        </label>
        < input
  id = "district"
  type = "text"
  name = "district"
  value = { formData.district }
  onChange = { handleChange }
  placeholder = "Digite o bairro"
  className = "w-full p-3 mt-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  required
    />
    </div>
    < div className = "mb-4" >
      <label htmlFor="city" className = "block text-sm font-medium text-gray-700" >
        Cidade
        </label>
        < input
  id = "city"
  type = "text"
  name = "city"
  value = { formData.city }
  onChange = { handleChange }
  placeholder = "Digite a cidade"
  className = "w-full p-3 mt-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  required
    />
    </div>
    < div className = "mb-4" >
      <label htmlFor="state" className = "block text-sm font-medium text-gray-700" >
        Estado
        </label>
        < input
  id = "state"
  type = "text"
  name = "state"
  value = { formData.state }
  onChange = { handleChange }
  placeholder = "Digite o estado"
  className = "w-full p-3 mt-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  required
    />
    </div>
    < div className = "mb-4" >
      <label htmlFor="number" className = "block text-sm font-medium text-gray-700" >
        Número
        </label>
        < input
  id = "number"
  type = "text"
  name = "number"
  value = { formData.number }
  onChange = { handleChange }
  placeholder = "Digite o número"
  className = "w-full p-3 mt-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  required
    />
    </div>
    < div className = "mb-4" >
      <label htmlFor="cep" className = "block text-sm font-medium text-gray-700" >
        CEP
        </label>
        < input
  id = "cep"
  type = "text"
  name = "cep"
  value = { formData.cep }
  onChange = { handleChange }
  placeholder = "Digite o CEP"
  className = "w-full p-3 mt-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  required
    />
    </div>
    </>
  );
};

export default PersonFormFields;