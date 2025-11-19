<template>
    <div>
        <div v-if="sayYes" class="container">
            <h1> In new it </h1>
        </div>
        <div v-else class="container">
            <!-- Área donde se dibuja el puntero -->
            <div class="display">
                <h2 class="text-black">¿eres gay?</h2>
                <img id="img-gif" v-show="imageshow == 'pregunta'" class="img-pos" alt="Vue logo"
                    src="@/assets/perro.gif" width="100" height="100" />
                <img id="img-gif" v-show="imageshow == 'no'" class="img-pos" alt="Vue logo" src="@/assets/lloro.gif"
                    width="100" height="100" />
                <img id="img-gif" v-show="imageshow == 'sii'" class="img-pos" alt="Vue logo" src="@/assets/sii.gif"
                    width="100" height="100" />

                <button class="btn" @click="clickbtn1" id="btn1">Si</button>
                <button class="btn" @click="clickbtn2" ref="btnno" id="btn2">No</button>
                <img alt="Vue logo" class="cursor logo" src="@/assets/cursor-svgrepo-com.svg" width="25" height="25" />
            </div>
            <!-- Área donde controlas el cursor -->
            <div class="control">
                <p>Mueve el mouse aquí 🎮</p>
            </div>
        </div>
        
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

/* definePageMeta({
    title: '¿Quieres ser mi novia? 💖' ,
    layout: 'simple'
})
 */
definePageMeta({
  layout: 'simple'
})

const isVirtual = ref(false)
const contClicks = ref(0)
const imageshow = ref('pregunta')
const sayYes = ref(false)

function clickbtn1() {
    console.log('Alert click 1')
    if (isVirtual.value) {
        console.log("Click vino del cursor virtual");
        sayYes.value = true
    } else {
        console.log("Click real con mouse/touch");
    }
}

function clickbtn2() {
    console.log('Alert click 2')
    if (isVirtual.value) {
        console.log("Click vino del cursor virtual");
        const btn3 = document.getElementById('btn2')
        btn3.textContent = "Si";
        
        setTimeout(() => {

            sayYes.value = true
        }, 1000);
    } else {
        console.log("Click real con mouse/touch");
    }
}

onMounted(() => {
    const control = document.querySelector('.control');
    const display = document.querySelector('.display');
    const cursor = document.querySelector('.cursor');

    let cursorX = 0;
    let cursorY = 0;

    function moveCursor(x: number, y: number) {
        if (!control) return;
        const rect = control.getBoundingClientRect();
        const relX = x - rect.left;
        const relY = y - rect.top;

        // evitar coordenadas fuera del control
        if (relX < 0 || relY < 0 || relX > rect.width || relY > rect.height) return;

        // Escalar a display
        if (!display || !cursor) return;
        const dx = (relX / rect.width) * display.clientWidth;
        const dy = (relY / rect.height) * display.clientHeight;

        cursor.style.left = dx + 'px';
        cursor.style.top = dy + 'px';
        cursor.style.display = 'block';

        cursorX = dx;
        cursorY = dy;

        const elem = document.elementFromPoint(
            display.getBoundingClientRect().left + cursorX,
            display.getBoundingClientRect().top + cursorY
        );

        if (elem && elem.tagName === "BUTTON") {
            console.log("El cursor virtual está sobre:", elem.id);
            if (elem.id == "btn2") {
                imageshow.value = 'no'
                if (contClicks.value <= 35) {
                    moveButtonRandom(elem);
                    contClicks.value++;
                }
                console.log(contClicks.value)
                //moveButtonRandom(elem);
            } else if (elem.id == "btn1") {
                imageshow.value = 'sii'
            }
        } else {
            imageshow.value = 'pregunta'
        }

    }

    function triggerVirtualClick() {
        const elem = document.elementFromPoint(
            display.getBoundingClientRect().left + cursorX,
            display.getBoundingClientRect().top + cursorY
        );
        //console.log(elem)

        if (elem && elem.tagName === "BUTTON") {
            console.log('here')
            isVirtual.value = true
            elem.click();
            isVirtual.value = false
        }
    }

    function moveButtonRandom(btn) {

        const displayRect = display.getBoundingClientRect();
        const btnRect = btn.getBoundingClientRect();

        const maxX = displayRect.width - btnRect.width;
        const maxY = displayRect.height - btnRect.height;

        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;

        btn.style.left = `${newX}px`;
        btn.style.top = `${newY}px`;

        //console.log(btn)
    }

    control.addEventListener('click', triggerVirtualClick);

    // 🖱 Eventos de mouse
    control.addEventListener('mousemove', (e) => moveCursor(e.clientX, e.clientY));
    //control.addEventListener('mouseleave', () => cursor.style.display = 'none');

    // 📱 Eventos de touch
    /* control.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        moveCursor(touch.clientX, touch.clientY);
    });

    control.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        moveCursor(touch.clientX, touch.clientY);
    }); */
    const THRESHOLD = 10;
    control.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        moveCursor(touch.clientX, touch.clientY);
    }, { passive: true });

    control.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];

        const dx = Math.abs(touch.clientX - cursorX);
        const dy = Math.abs(touch.clientY - cursorY);
        if (dx > THRESHOLD || dy > THRESHOLD) {
            moveCursor(touch.clientX, touch.clientY);
            e.preventDefault(); // sólo cuando realmente es un arrastre
    }
    }, { passive: false });

    /* control.addEventListener('touchend', (e) => {
    // Si !moved => fue un tap; el click nativo se disparará porque no llamamos preventDefault
    }); */

    //control.addEventListener('touchend', () => cursor.style.display = 'none');
    control.addEventListener('touchend', triggerVirtualClick);
})
</script>

<style scoped>
body {
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f0f0f0;
    overflow: hidden;
}

.container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.btn {
    position: absolute;
    padding: 10px 20px;
    background: steelblue;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: default;
    transition: left 0.3s ease, top 0.3s ease;
    /* movimiento suave */
}

.img-pos {
    position: absolute;
    border-radius: 50%;
}

#img-gif {
    top: 100px;
    left: 120px;
}

#btn1 {
    top: 220px;
    left: 120px;
}

#btn2 {
    top: 220px;
    left: 180px;
}

.control {
    width: 100%;
    height: 200px;
    border: 2px dashed #444;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    user-select: none;
    /* evita selección accidental en móviles */
}

.display {
    width: 100%;
    height: 300px;
    border: 2px solid #444;
    position: relative;
    background: white;
    overflow: hidden;
}

.cursor {
    width: 20px;
    height: 20px;
    /* border: 2px solid red; 
    border-radius: 50%;*/
    position: absolute;
    pointer-events: none;
    transform: translate(-50%, -50%);
    display: none;
}
</style>