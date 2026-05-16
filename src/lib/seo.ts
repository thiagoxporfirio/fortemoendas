export const SITE_URL = "https://www.fortemoendas.com.br"
export const SITE_NAME = "Forte Moendas S/A"
export const DEFAULT_TITLE = "Forte Moendas S/A | Tecnologia em Moendas"
export const DEFAULT_DESCRIPTION =
	"Forte Moendas S/A: engenharia, fabricação, montagem, reforma e manutenção de moendas para o setor sucroenergético."
export const DEFAULT_OG_IMAGE = "/images/fortecapa2.png"

export const ORGANIZATION_SCHEMA = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: SITE_NAME,
	url: SITE_URL,
	logo: `${SITE_URL}/images/fortelogonotbg.png`,
	email: "contato@fortemoendas.com.br",
	address: {
		"@type": "PostalAddress",
		streetAddress: "Avenida Mauro Albertani, 1096",
		addressLocality: "Sertãozinho",
		addressRegion: "SP",
		postalCode: "14176-123",
		addressCountry: "BR"
	}
}

