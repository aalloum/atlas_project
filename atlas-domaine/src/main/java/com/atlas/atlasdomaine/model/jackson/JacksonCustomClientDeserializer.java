package com.atlas.atlasdomaine.model.jackson;

import com.atlas.atlasdomaine.model.Cabinet;
import com.atlas.atlasdomaine.model.Client;
import com.atlas.atlasdomaine.model.Comptable;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * @author ALLOUM Abderrahim on 15/11/2020
 * @project atlas-domaine
 */
public class JacksonCustomClientDeserializer extends StdDeserializer<Client> {

    public JacksonCustomClientDeserializer() {
        this(null);
    }
    public JacksonCustomClientDeserializer(Class<Client> t) {
        super(t);
    }

    @Override
    public Client deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JsonProcessingException {
        Client client = new Client();
        Comptable comptable = new Comptable();
        Cabinet cabinet = new Cabinet();

        ObjectMapper mapper = new ObjectMapper();
        JsonNode node = jsonParser.getCodec().readTree(jsonParser);
        JsonNode comptable_node = node.get("comptable");
        JsonNode cabinet_node = node.get("cabinet");
        comptable = mapper.treeToValue(comptable_node, Comptable.class);
        cabinet = mapper.treeToValue(cabinet_node, Cabinet.class);

        int clientId = node.get("id").asInt();
        String denomination = node.get("denomination").asText(null);
        Integer identifiantFiscal = node.get("identifiantFiscal").asInt();
        String activitePrincipale = node.get("activitePrincipale").asText(null);
        String formeJuridique = node.get("formeJuridique").asText(null);
        String regime = node.get("regime").asText(null);
        String numeroRegistreCommerce = node.get("numeroRegistreCommerce").asText(null);
        String numeroCNSS = node.get("numeroCNSS").asText(null);
        String numeroTaxeProfessionnelle = node.get("numeroTaxeProfessionnelle").asText(null);
        String numeroICE = node.get("numeroICE").asText(null);
        String telephone = node.get("telephone").asText(null);
        String fax = node.get("fax").asText(null);
        String email = node.get("email").asText(null);
        String rib = node.get("rib").asText(null);
        String banque = node.get("banque").asText(null);
        String agence = node.get("agence").asText(null);
        String ville = node.get("ville").asText(null);
        String codePostal = node.get("codePostal").asText(null);
        String adresse = node.get("adresse").asText(null);

        if (!(clientId == 0)) {
            client.setId(clientId);
        }
        client.setDenomination(denomination);
        client.setIdentifiantFiscal(identifiantFiscal);
        client.setActivitePrincipale(activitePrincipale);
        client.setFormeJuridique(formeJuridique);
        client.setRegime(regime);
        client.setNumeroRegistreCommerce(numeroRegistreCommerce);
        client.setNumeroCNSS(numeroCNSS);
        client.setNumeroTaxeProfessionnelle(numeroTaxeProfessionnelle);
        client.setNumeroICE(numeroICE);
        client.setTelephone(telephone);
        client.setFax(fax);
        client.setEmail(email);
        client.setRib(rib);
        client.setBanque(banque);
        client.setAgence(agence);
        client.setVille(ville);
        client.setCodePostal(codePostal);
        client.setAdresse(adresse);
        client.setCabinet(cabinet);
        client.setComptable(comptable);

        return client;
    }
}
