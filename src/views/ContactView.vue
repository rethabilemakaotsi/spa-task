<template>
    <div>
        <h1>Contact Us</h1>
        <div class="contact-info">
            <p><strong>Address:</strong> 123 Sharenet Street, City, Country</p>
            <p><strong>Contact Numbers:</strong> +123 456 7890, +098 765 4321</p>
            <div id="map" style="height: 400px; width: 100%;"></div>
        </div>
        <router-link to="/">Back to Currencies</router-link>
    </div>
</template>

<script>
export default {
    mounted() {
        this.loadMap();
    },
    methods: {
        loadMap() {
            // Load Google Maps script
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBch6YvZHrwxzEbxfUgMx40RlH_kOBrSEE&callback=initMap`;
            script.async = true;
            document.head.appendChild(script);

            window.initMap = this.initMap;
        },
        initMap() {
            const map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 8,
            });
            new google.maps.Marker({
                position: { lat: -34.397, lng: 150.644 },
                map: map,
                title: "Sharenet Office",
            });
        }
    }
};
</script>

<style scoped>
.contact-info {
    margin: 20px;
}
</style>
