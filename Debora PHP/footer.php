<footer class="footer">
    <p>De meu coração, para Debi ❤️</p>
    <p>&copy; <?php echo date('Y'); ?></p>
</footer>

<script src="Js/coracao.js"></script>
<script src="Js/carrossel.js"></script>
<script>
document.querySelectorAll('.tema-titulo').forEach(botao => {
    botao.addEventListener('click', () => {
        const tema = botao.parentElement;
        tema.classList.toggle('ativo');
    });
});
</script>

</body>
</html>