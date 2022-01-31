function func(alunos, media){
    let alunosAcimaDaMedia = [];

    for(let aluno of alunos) {
        const {media, nome} = aluno;

        if (nota >= media) {
            alunosAcimaDaMedia.push(nome);
        }
    }

    return alunosAcimaDaMedia;
}