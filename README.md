# Roteiro Prático — Anatomia Topográfica do Tórax

PWA responsivo para GitHub Pages com G1 (Artérias e Nervos) e G2 (Veias).

## Recursos
- Hierarquia completa do roteiro.
- Associação automática das estruturas a `images/1.png` até `images/105.png`.
- Upload de múltiplas imagens por estrutura.
- Persistência local dos anexos via IndexedDB.
- Ocultar/mostrar imagens individualmente ou em bloco.
- Zoom em tela cheia de 1× a 4×.
- Busca por estrutura e filtro por G1/G2.
- Geração de PDF local, com opção de incluir ou não imagens ocultas.
- Instalação como PWA.
- Layout responsivo com glassmorphism e bolhas flutuantes.

## Colocar as imagens
Abra a pasta `images/` e adicione seus arquivos:

`1.png`, `2.png`, `3.png` ... `105.png`.

A numeração já está mapeada para a ordem do roteiro.

## Publicar no GitHub Pages
1. Crie um repositório no GitHub.
2. Envie todos os arquivos desta pasta para a raiz do repositório.
3. Vá em **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/root`.
6. Salve e aguarde o endereço do GitHub Pages aparecer.

## Observação sobre o PDF
O app carrega o jsPDF por CDN. Se a biblioteca externa estiver indisponível, o botão de PDF abre automaticamente a impressão do navegador, onde é possível usar **Salvar como PDF**.
