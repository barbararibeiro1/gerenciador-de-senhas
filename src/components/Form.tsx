import { useState } from 'react';
import InputLabel from './InputLabel';

type PropsForm = {
  handleAddService: (service: any) => void,
  handleViewData: () => void
};

function Form({ handleViewData, handleAddService }: PropsForm) {
  const [formInfo, setFormInfo] = useState({
    name: '',
    login: '',
    senha: '',
    url: '',
  });

  const [serviceName, setServiceName] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [url, setUrl] = useState('');

  console.log(serviceName, setServiceName, login, setLogin, senha, setSenha, url, setUrl);

  const isFormComplete = Object.values(formInfo).every((field) => field !== '');
  console.log(isFormComplete);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddService(formInfo);
    setFormInfo({
      name: '',
      login: '',
      senha: '',
      url: '',
    });
    handleViewData();
  };

  const senhaRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).+/;
  const verifyName = formInfo.name.length > 0;
  const verifyLogin = formInfo.login.length > 0;
  const verifySenha = formInfo.senha.length >= 8 && formInfo.senha.length < 16;
  const regex1 = senhaRegex.test(formInfo.senha);

  const verifyData = [
    verifyName,
    verifyLogin,
    verifySenha,
    regex1,
  ];

  console.log(verifyData);

  const avaiable: string = 'valid-password-check';
  const unavaiable: string = 'invalid-password-check';

  const verifyPassword = (formInfo.senha.length > 7
    && formInfo.senha.length < 17 && senhaRegex.test(formInfo.senha));
  const btnDisable = (formInfo.name !== '' && formInfo.login !== '' && verifyPassword);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormInfo({
      ...formInfo,
      [name]: value,
    });
    const validationClass = regex1 ? avaiable : unavaiable;
    setEightCharacters(validationClass);
    setSixteenCharacters(validationClass);
    setLettersNumbers(validationClass);
    setAllCharacters(validationClass);
    console.log(setEightCharacters, setSixteenCharacters);
    console.log(setLettersNumbers, setAllCharacters);
  };

  const [eightCharacters, setEightCharacters] = useState<string>(unavaiable);
  const [sixteenCharacters, setSixteenCharacters] = useState<string>(unavaiable);
  const [lettersNumbers, setLettersNumbers] = useState<string>(unavaiable);
  const [allCharacters, setAllCharacters] = useState<string>(unavaiable);

  function handleEightCharactersState() {
    setEightCharacters(verifySenha ? avaiable : unavaiable);
  }
  console.log(handleEightCharactersState);

  function handleSixteenCharactersState() {
    setSixteenCharacters(regex1 ? avaiable : unavaiable);
  }
  console.log(handleSixteenCharactersState);

  function handleLettersNumbersState() {
    setLettersNumbers(regex1 ? avaiable : unavaiable);
  }
  console.log(handleLettersNumbersState);

  function handleAllCharactersState() {
    setAllCharacters(regex1 ? avaiable : unavaiable);
  }
  console.log(handleAllCharactersState);

  return (
    <form onSubmit={ handleSubmit }>
      <InputLabel
        name="name"
        label="Nome do serviço"
        value={ formInfo.name }
        onChange={ handleChange }
      />
      <InputLabel
        name="login"
        label="login"
        value={ formInfo.login }
        onChange={ handleChange }
      />
      <label htmlFor="senha">Senha</label>
      <input
        type="password"
        name="senha"
        id="senha"
        onChange={ handleChange }
      />
      <div>
        <p className={ `fistCheck ${eightCharacters}` }>Possuir 8 ou mais caracteres</p>
        <p className={ `secondCheck ${sixteenCharacters}` }>Possuir até 16 caracteres</p>
        <p className={ `thirdCheck ${lettersNumbers}` }>Possuir letras e números</p>
        <p className={ `maisUmCheck ${allCharacters}` }>
          Possuir algum caractere especial
        </p>
      </div>
      <InputLabel
        name="url"
        label="URL"
        value={ formInfo.url }
        onChange={ handleChange }
      />
      <button disabled={ !btnDisable }>
        Cadastrar nova senha
      </button>
      <button type="button" onClick={ handleViewData }>Cancelar</button>
    </form>
  );
}

export default Form;
