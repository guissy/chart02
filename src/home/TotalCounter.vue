<template>
    <section class="num-total">
        <ul>
            <li class="num-card-vertical">
                <span class="label">教师数量</span>
                <span class="num">99</span>
            </li>
            <li class="num-card-vertical">
                <span class="label">学生数量</span>
                <span class="num">3000</span>
            </li>
            <li class="num-card-vertical">
                <span class="label">师生比</span>
                <span class="num">1:50</span>
            </li>
        </ul>
    </section>
</template>
<style scoped>
    .num-total ul {
        display: flex;
        margin-left: 12px;
        margin-bottom: 10px;
    }
    .num-card-vertical {
        padding: 10px 0;
        width: 130px;
        border: 1px solid #2b89a8;
        box-shadow: inset 0 0 6px #b2dbff;
        text-align: center;
    }
    .num-card-vertical:not(:last-child) {
        margin-right: 6px;
    }
    .num-card-vertical .label {
        display: block;
    }
    .num-card-vertical .num {
        display: block;
        margin-top: 10px;
        font-size: 22px;
        color: #25d8f3;
        text-shadow: 0 0 4px #72ecff;
        font-family: entsans;
        letter-spacing: 2px;
    }
</style>