package com.atlas.atlasdomaine.model.jackson;

import com.atlas.atlasdomaine.model.Cabinet;
import com.atlas.atlasdomaine.model.Client;
import com.atlas.atlasdomaine.model.Comptable;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;

import java.io.IOException;
import java.text.Format;
import java.text.SimpleDateFormat;

/**
 * @author ALLOUM Abderrahim on 15/11/2020
 * @project atlas-domaine
 */
public class JacksonCustomClientSerializer extends StdSerializer<Client> {

    public JacksonCustomClientSerializer() {
        this(null);
    }
    protected JacksonCustomClientSerializer(Class<Client> t) {
        super(t);
    }

    @Override
    public void serialize(Client client, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {

        jsonGenerator.writeStartObject(); // client
        if (client.getId() == null) {
            jsonGenerator.writeNullField("id");
        } else {
            jsonGenerator.writeNumberField("id", client.getId());
        }
        jsonGenerator.writeStringField("denomination", client.getDenomination());
        jsonGenerator.writeNumberField("identifiantFiscal", client.getIdentifiantFiscal());
        jsonGenerator.writeStringField("activitePrincipale", client.getActivitePrincipale());
        jsonGenerator.writeStringField("formeJuridique", client.getFormeJuridique());
        jsonGenerator.writeStringField("regime", client.getRegime());
        jsonGenerator.writeStringField("numeroRegistreCommerce", client.getNumeroRegistreCommerce());
        jsonGenerator.writeStringField("numeroCNSS", client.getNumeroCNSS());
        jsonGenerator.writeStringField("numeroTaxeProfessionnelle", client.getNumeroTaxeProfessionnelle());
        jsonGenerator.writeStringField("numeroICE", client.getNumeroICE());
        jsonGenerator.writeStringField("telephone", client.getTelephone());
        jsonGenerator.writeStringField("fax", client.getFax());
        jsonGenerator.writeStringField("email", client.getEmail());
        jsonGenerator.writeStringField("rib", client.getRib());
        jsonGenerator.writeStringField("banque", client.getBanque());
        jsonGenerator.writeStringField("agence", client.getAgence());
        jsonGenerator.writeStringField("ville", client.getVille());
        jsonGenerator.writeStringField("codePostal", client.getCodePostal());
        jsonGenerator.writeStringField("adresse", client.getAdresse());

        Cabinet cabinet = client.getCabinet();
        jsonGenerator.writeObjectFieldStart("cabinet");
        jsonGenerator.writeNumberField("id", cabinet.getId());
        jsonGenerator.writeStringField("nameCabinet", cabinet.getNameCabinet());
        jsonGenerator.writeEndObject(); // cabinet

        Comptable comptable = client.getComptable();
        jsonGenerator.writeObjectFieldStart("comptable");
        jsonGenerator.writeNumberField("id", comptable.getId());
        jsonGenerator.writeStringField("firstName", comptable.getFirstName());
        jsonGenerator.writeStringField("lastName", comptable.getLastName());
        jsonGenerator.writeStringField("matricule", comptable.getMatricule());
        jsonGenerator.writeBooleanField("actived", comptable.isActived());
        jsonGenerator.writeEndObject(); // comptable

        jsonGenerator.writeEndObject(); // client
    }
}
