export default function ServiceItem({ service }) {
  console.log(service);
  return (
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
  );
}
