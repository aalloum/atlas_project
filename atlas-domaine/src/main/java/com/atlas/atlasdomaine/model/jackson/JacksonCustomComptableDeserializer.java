package com.atlas.atlasdomaine.model.jackson;

import com.atlas.atlasdomaine.model.Cabinet;
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
public class JacksonCustomComptableDeserializer extends StdDeserializer<Comptable> {

    public JacksonCustomComptableDeserializer() {
        this(null);
    }
    public JacksonCustomComptableDeserializer(Class<Comptable> t) {
        super(t);
    }

    @Override
    public Comptable deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JsonProcessingException {

        Comptable comptable = new Comptable();
        Cabinet cabinet = new Cabinet();

        ObjectMapper mapper = new ObjectMapper();

        JsonNode node = jsonParser.getCodec().readTree(jsonParser);
        JsonNode cabinet_node = node.get("cabinet");

        cabinet = mapper.treeToValue(cabinet_node, Cabinet.class);
        int comptableId = node.get("id").asInt();
        String firstName = node.get("firstName").asText(null);
        String lastName = node.get("lastName").asText(null);
        String matricule = node.get("matricule").asText(null);
        Boolean actived = node.get("actived").asBoolean();


        if (!(comptableId == 0)) {
            comptable.setId(comptableId);
        }
        comptable.setFirstName(firstName);
        comptable.setLastName(lastName);
        comptable.setMatricule(matricule);
        comptable.setActived(actived);
        comptable.setCabinet(cabinet);

        return comptable;
    }
}
