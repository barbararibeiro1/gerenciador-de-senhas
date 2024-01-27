import { useState } from 'react';
import InputLabel from './InputLabel';

type PropsForm = {
  handleViewData: () => void
};

function Form({ handleViewData }: PropsForm) {
  const [formInfo, setFormInfo] = useState({
    name: '',
    login: '',
    senha: '',
    url: '',
  });

  const senhaRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).+/;
  const verifyPassword = (formInfo.senha.length > 7
    && formInfo.senha.length < 17 && senhaRegex.test(formInfo.senha));
  const btnDisable = (formInfo.name !== '' && formInfo.login !== '' && verifyPassword);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormInfo({
      ...formInfo,
      [name]: value,
    });
  };

  return (
    <form>
      <InputLabel
        name="name"
        label="Nome do serviço"
        value={ formInfo.name }
        handleChange={ handleChange }
      />
      <InputLabel
        name="login"
        label="login"
        value={ formInfo.login }
        handleChange={ handleChange }
      />
      <label htmlFor="senha">Senha</label>
      <input
        type="password"
        name="senha"
        id="senha"
        onChange={ handleChange }
      />
      <InputLabel
        name="url"
        label="URL"
        value={ formInfo.url }
        handleChange={ handleChange }
      />
      <button disabled={ !btnDisable }>
        Cadastrar
      </button>
      <button onClick={ handleViewData }>Cancelar</button>
    </form>
  );
}

export default Form;
