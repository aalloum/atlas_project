package com.atlas.atlasdomaine.model.jackson;

import com.atlas.atlasdomaine.model.Cabinet;
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
public class JacksonCustomCabinetDeserializer extends StdDeserializer<Cabinet> {

    public JacksonCustomCabinetDeserializer() {
        this(null);
    }
    public JacksonCustomCabinetDeserializer(Class<Cabinet> t) {
        super(t);
    }

    @Override
    public Cabinet deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JsonProcessingException {
        Cabinet cabinet = new Cabinet();
        ObjectMapper mapper = new ObjectMapper();

        JsonNode node = jsonParser.getCodec().readTree(jsonParser);
        int cabinetId = node.get("id").asInt();
        String name = node.get("nameCabinet").asText(null);
        Integer identifiantFiscal = node.get("identifiantFiscal").asInt();
        String activitePrincipale = node.get("activitePrincipale").asText(null);
        String formeJuridique = node.get("formeJuridique").asText(null);
        String regime = node.get("regime").asText(null);
        String numeroRegistreCommerce = node.get("numeroRegistreCommerce").asText(null);
        String numeroCNSS = node.get("numeroCNSS").asText(null);
        String numeroTaxeProfessionnelle = node.get("numeroTaxeProfessionnelle").asText(null);
        String numeroICE = node.get("numeroICE").asText(null);
        String fax = node.get("fax").asText(null);
        String email = node.get("email").asText(null);
        String rib = node.get("rib").asText(null);
        String banque = node.get("banque").asText(null);
        String agence = node.get("agence").asText(null);
        String ville = node.get("ville").asText(null);
        String codePostal = node.get("codePostal").asText(null);
        String adresse = node.get("adresse").asText(null);


        if (!(cabinetId == 0)) {
            cabinet.setId(cabinetId);
        }
        cabinet.setNameCabinet(name);
        cabinet.setIdentifiantFiscal(identifiantFiscal);
        cabinet.setActivitePrincipale(activitePrincipale);
        cabinet.setFormeJuridique(formeJuridique);
        cabinet.setRegime(regime);
        cabinet.setNumeroRegistreCommerce(numeroRegistreCommerce);
        cabinet.setNumeroCNSS(numeroCNSS);
        cabinet.setNumeroTaxeProfessionnelle(numeroTaxeProfessionnelle);
        cabinet.setNumeroICE(numeroICE);
        cabinet.setFax(fax);
        cabinet.setEmail(email);
        cabinet.setRib(rib);
        cabinet.setBanque(banque);
        cabinet.setAdresse(agence);
        cabinet.setVille(ville);
        cabinet.setCodePostal(codePostal);
        cabinet.setAdresse(adresse);
        return cabinet;
    }
}
