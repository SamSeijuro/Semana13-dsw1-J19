package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;


@Component
public class DatabaseLoader implements CommandLineRunner {
    
    private final InstrumentoRepository repositoryI;
    private final MusicoRepository repositoryM;


    @Autowired
    public DatabaseLoader (InstrumentoRepository repositoryI, MusicoRepository repositoryM) {
        this.repositoryI = repositoryI;
        this.repositoryM = repositoryM;
    }

    
    @Override
    public void run(String... strings) throws Exception {
        this.repositoryI.save(new Instrumento("Guitarra", "Cuerda", "de manera, con caja de resonancia, 6 cuerdas templadas "));
        this.repositoryI.save(new Instrumento("Ukelele", "Cuerda", "de manera, con caja de resonancia, 4 cuerdas templadas"));
        this.repositoryI.save(new Instrumento("Melodica", "Cuerda", "de manera, con caja de resonancia, 4 cuerdas templadas"));
        this.repositoryM.save(new Musico("Johan Chavez"));
    }


}
