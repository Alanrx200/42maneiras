export default function LeadForm() {
  return (
    <form
      action="https://formsubmit.co/miguel-argen2014@outlook.com"
      method="POST"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        maxWidth: '400px',
        margin: '0 auto',
        backgroundColor: '#1e1e2f',
        padding: '24px',
        borderRadius: '12px',
        color: 'white',
      }}
    >
      <h2 style={{ textAlign: 'center', fontSize: '20px' }}>Quase lá! 🔥</h2>
      <p style={{ textAlign: 'center', fontSize: '14px' }}>
        Te envio as 3 frases mais poderosas agora — digita aqui rapidinho:
      </p>

      <input
        type="text"
        name="nome"
        placeholder="Seu nome"
        required
        style={{
          padding: '10px',
          borderRadius: '6px',
          color: '#000',
          border: '1px solid #ccc',
        }}
      />

      <input
        type="tel"
        name="whatsapp"
        placeholder="Seu WhatsApp (com DDD)"
        required
        pattern="[0-9]{10,13}"
        style={{
          padding: '10px',
          borderRadius: '6px',
          color: '#000',
          border: '1px solid #ccc',
        }}
      />

      <input type="hidden" name="_next" value="https://suaurl.vercel.app/obrigado.html" />
      <input type="text" name="_honey" style={{ display: 'none' }} />

      <button
        type="submit"
        style={{
          backgroundColor: '#f33',
          color: 'white',
          padding: '12px',
          borderRadius: '6px',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        Ver Meu Resultado Agora 👉
      </button>

      <p style={{ fontSize: '12px', textAlign: 'center', color: '#aaa' }}>
        Seus dados estão seguros. Você pode cancelar a qualquer momento.
      </p>
    </form>
  );
}
