package com.atlas.atlasdomaine.model.jackson;

import com.atlas.atlasdomaine.model.Cabinet;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;

import java.io.IOException;

/**
 * @author ALLOUM Abderrahim on 15/11/2020
 * @project atlas-domaine
 */
public class JacksonCustomCabinetSerializer extends StdSerializer<Cabinet> {

    public JacksonCustomCabinetSerializer() {
        this(null);
    }
    protected JacksonCustomCabinetSerializer(Class<Cabinet> t) {
        super(t);
    }

    @Override
    public void serialize(Cabinet cabinet, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {

        jsonGenerator.writeStartObject(); // cabinet
        if (cabinet.getId() == null) {
            jsonGenerator.writeNullField("id");
        } else {
            jsonGenerator.writeNumberField("id", cabinet.getId());
        }
        jsonGenerator.writeStringField("nameCabinet", cabinet.getNameCabinet());
        jsonGenerator.writeNumberField("identifiantFiscal", cabinet.getIdentifiantFiscal());
        jsonGenerator.writeStringField("activitePrincipale", cabinet.getActivitePrincipale());
        jsonGenerator.writeStringField("formeJuridique", cabinet.getFormeJuridique());
        jsonGenerator.writeStringField("regime", cabinet.getRegime());
        jsonGenerator.writeStringField("numeroRegistreCommerce", cabinet.getNumeroRegistreCommerce());
        jsonGenerator.writeStringField("numeroCNSS", cabinet.getNumeroCNSS());
        jsonGenerator.writeStringField("numeroTaxeProfessionnelle", cabinet.getNumeroTaxeProfessionnelle());
        jsonGenerator.writeStringField("numeroICE", cabinet.getNumeroICE());
        jsonGenerator.writeStringField("fax", cabinet.getFax());
        jsonGenerator.writeStringField("email", cabinet.getEmail());
        jsonGenerator.writeStringField("rib", cabinet.getRib());
        jsonGenerator.writeStringField("banque", cabinet.getBanque());
        jsonGenerator.writeStringField("agence", cabinet.getAgence());
        jsonGenerator.writeStringField("ville", cabinet.getVille());
        jsonGenerator.writeStringField("codePostal", cabinet.getCodePostal());
        jsonGenerator.writeStringField("adresse", cabinet.getAdresse());
        jsonGenerator.writeEndObject();
    }
}
