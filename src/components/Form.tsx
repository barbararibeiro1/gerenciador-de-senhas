import React from 'react';

type PropsForm = {
  handleViewData: () => void
};

function Form({ handleViewData }: PropsForm) {
  return (
    <form action="">
      <label htmlFor="serviceName">Nome do serviço</label>
      <input type="text" name="serviceName" id="serviceName" />
      <label htmlFor="Login">Login</label>
      <input type="text" name="Login" id="Login" />
      <label htmlFor="senha">Senha</label>
      <input type="password" name="senha" id="senha" />
      <label htmlFor="URL">URL</label>
      <input type="text" name="URL" id="URL" />
      <button type="submit">Cadastrar</button>
      <button onClick={ handleViewData }>Cancelar</button>
    </form>
  );
}

export default Form;
