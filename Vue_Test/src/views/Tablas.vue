<template>
    <v-card 
    class ="mx-auto"
    max-width="1500px"
    obtenerInfo>
        <v-table
        fixed-header
        height="800px"
        >
        <thead>
            <tr>
            <th class="text-center">
                Autor
            </th>
            <th class="text-center">
                Titulo
            </th>
            <th class="text-center">
                Post
            </th>
            </tr>
        </thead>
        <tbody>
            <tr
            v-for="item in posts"
            :key="item.id"
            >
            <td>{{ obtenerNombreAutor(item.userId) }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.body }}</td>
            </tr>
        </tbody>
        </v-table>
    </v-card>
  </template>

<script setup>
    import { ref, onMounted } from 'vue';
    const posts = ref([]);
    const users = ref([]);

    async function obtenerInfo(){
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
        const data = await response.json();
        posts.value = data;
    }

    async function obtenerUsuario(){
        const response = await fetch("https://jsonplaceholder.typicode.com/users/");
        const data = await response.json();
        users.value = data;
    }

    function obtenerNombreAutor(userId) {
        const user = users.value.find(user => user.id === userId);
        return user ? user.name : 'Desconocido';
    }


    onMounted(() => {
        obtenerInfo();
        obtenerUsuario();
    });
</script>