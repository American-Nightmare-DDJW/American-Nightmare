# American-Nightmare

# Joc Web amb Phaser

## i. Introducció

Aquest projecte és un videojoc desenvolupat amb **Phaser 3**, on el jugador controla un personatge que ha de recollir un objecte (diners) i portar-lo fins a un NPC (el traficant), evitant ser detectat per diversos guardies amb visió limitada i camps de detecció.

L’objectiu és oferir una experiència senzilla d’estratègia i infiltració en una ambientació urbana, amb un component de progressió bàsica mitjançant objectes interactius i condicions per completar la partida.

---

## ii. Descripció del disseny del joc

- **Estil de joc:** 2.5D amb vista zenital (top-down).
- **Jugador:** Personatge principal que es pot moure amb les tecles W, A, S, D.
- **Entorns:** El mapa conté edificis, col·lisions, objectes i un NPC final.
- **Objectiu:** Recollir diners i lliurar-los al traficant sense ser detectat.
- **Enemics:** Guardies amb rutes definides i con de visió (detecció per proximitat o angle).
- **Escenes:** 
  - Escena principal (`default`)
  - Escena de finalització (`juegoSuperado`)
  - Escena de Joc Perdut (`gameOver`) amb opció de reintentar.

---

## iii. Descripció de les parts més rellevants de la implementació

- **Phaser 3 com a motor de joc**, amb sistema de col·lisions `arcade.physics`.
- **Sistema de profunditat (depth sorting)** manual, basat en els “peus” del jugador i dels objectes per simular una perspectiva 2.5D.
- **Guardies com a entitats personalitzades** (classe `Guardia`) amb patrulles, visió i detecció intel·ligent.
- **Condició de victòria dinàmica:** només es pot completar la missió si s'ha recollit l'objecte necessari.
- **Transició entre escenes** amb `this.scene.start()`.

---

## iv. Conclusions i problemes trobats

**Conclusions:**
- Phaser és una eina potent i àgil per a projectes 2D.
- El sistema de col·lisions arcade és fàcil d’utilitzar però limita les formes.
- El `depth sorting` en 2.5D requereix una bona gestió manual de les hitbox i de la posició vertical (`body.y`).

**Problemes trobats:**
- El `depth` inicial es basava incorrectament en el centre del sprite i no en els “peus”.
- Dificultats inicials amb l’estructura d’escenes: va caldre passar d’una única escena funcional a una estructura amb múltiples escenes (classes).
- Errors de referència per funcions globals com `gameOver()` en fitxers externs.

---

## v. Manual d’usuari

**Controls:**
- `W` - Moure cap amunt
- `A` - Moure a l’esquerra
- `S` - Moure cap avall
- `D` - Moure a la dreta

**Objectiu:**
1. Mou-te pel mapa i esquiva els guardies.
2. Recull els diners (objecte verd).
3. Porta’ls fins al traficant (NPC a l’extrem del mapa).
4. Si completes l’objectiu, apareixerà una pantalla de “Joc Superat”.
5. Si ets detectat per un guardia, el joc mostrarà un missatge de “Game Over”.

**Reiniciar:**
- Des de la pantalla de GameOver pots fer clic a **Reintentar** per començar de nou.

---

## 🧠 Desenvolupadors

-Juan Diego Suarez Perez
-Irina Palma
-Leonel Messi
