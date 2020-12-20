package com.atlas.atlasdomaine.message;

/**
 * @author ALLOUM Abderrahim on 07/12/2020
 * @project atlas-domaine
 */
public class ResponseMessage {

    private String message;

    public ResponseMessage(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
