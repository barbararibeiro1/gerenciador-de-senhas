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
    handleEightCharactersState();
    handleSixteenCharactersState();
    handleLettersNumbersState();
    handleAllCharactersState();
  };

  const [eightCharacters, setEightCharacters] = useState<string>(unavaiable);
  const [sixteenCharacters, setSixteenCharacters] = useState<string>(unavaiable);
  const [lettersNumbers, setLettersNumbers] = useState<string>(unavaiable);
  const [allCharacters, setAllCharacters] = useState<string>(unavaiable);

  function handleEightCharactersState() {
    setEightCharacters(verifySenha ? avaiable : unavaiable);
  }

  function handleSixteenCharactersState() {
    setSixteenCharacters(regex1 ? avaiable : unavaiable);
  }

  function handleLettersNumbersState() {
    setLettersNumbers(regex1 ? avaiable : unavaiable);
  }

  function handleAllCharactersState() {
    setAllCharacters(regex1 ? avaiable : unavaiable);
  }

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
