type Service = {
  id: number;
  url: string;
  name: string;
  login: string;
  senha: string;
}

type ServiceItemProps = {
  service: Service;
  handleRemove: (id: number) => void;
}

export default function ServiceItem({ service, handleRemove}) {
  console.log(service);
  return (
    <>
    <div>
      <a
        href={ service.url }
        target="_blank"
        rel="noopener noreferrer"
      >
        { service.name }
      </a>
      <p>
        Login:
        { service.login}
      </p>
      <p>
        Senha:
        {service.senha}
      </p>
    </div>
    <button data-testid="remove-btn" onClick={ () => handleRemove(service.id) }>Remover</button>
    </>
  )
};
