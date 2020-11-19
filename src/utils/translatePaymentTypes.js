export default function translate(english_type) {
  const types = {
    billet: 'Boleto',
    credit: 'Cartão',
  };

  return types[english_type];
}
