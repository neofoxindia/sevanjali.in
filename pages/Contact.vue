<template>
    <div class="container py-5">
        <div class="block-title">
            <h2>Contact With Us</h2>
        </div>
        <div class="row justify-content-center align-items-center">
            <div class="col-md-5 col-12">
                <div class="contact-form py-3 px-4 rounded shadow-sm">
                    <form
                        action="https://docs.google.com/forms/d/e/1FAIpQLSfkzWyIq-VDzC2CuY6ucGeJ6A0E46-TPDogorJSJ7VaMh0IyA/formResponse"
                        target="_self"
                        class="contact-form-validated contact-one__form"
                        id="bootstrapForm"
                        method="POST">
                        <div class="row">
                            <div class="col-xl-6 ">
                                <div class="contact-form__input-box">
                                    <!-- Field type: "short" id: "391447873" -->
                                    <fieldset>
                                        <legend for="391447873">Your Name</legend>
                                        <div class="form-group">
                                            <input aria-label="Your Name" id="1793448286" type="text"
                                                   name="entry.1793448286"
                                                   min="4"
                                                   class="form-control" required>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                            <div class="col-xl-6">
                                <div class="contact-form__input-box">
                                    <!-- Field type: "short" id: "536086696" -->
                                    <fieldset>
                                        <legend for="536086696">Your Email</legend>
                                        <div class="form-group">
                                            <input aria-label="Email" id="317147331" type="email"
                                                   name="entry.317147331"
                                                   class="form-control" required>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                            <div class="col-xl-12">
                                <div class="contact-form__input-box">
                                    <!-- Field type: "short" id: "542125608" -->
                                    <fieldset>
                                        <legend for="542125608">Phone Number</legend>
                                        <div class="form-group">
                                            <input aria-label="Phone Number" id="1829610231" type="text"
                                                   name="entry.1829610231"
                                                   pattern="[\d]{10}"
                                                   class="form-control" required>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                            <div class="col-xl-12">
                                <div class="contact-form__input-box">
                                    <!-- Field type: "paragraph" id: "302297273" -->
                                    <fieldset>
                                        <legend for="302297273">Message</legend>
                                        <div class="form-group">
                                                <textarea aria-label="Message" id="578053003" name="entry.578053003"
                                                          class="form-control" minlength="10"></textarea>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                        <input type="hidden" name="fvv" value="1">
                        <input type="hidden" name="fbzx" value="-8131268518735084094">
                        <input type="hidden" name="pageHistory" value="0">
                        <input class="thm-btn contact-form__btn" type="submit" value="Submit">

                    </form>


                </div>
            </div>
            <div class="col-md-5 col-12 d-flex align-items-stretch">
                <div class="contact-page__info-box rounded">
                    <div class="contact-page__info-box-address">
                        <h4 class="contact-page__info-box-tilte">Address</h4>
                        <p class="text-black-50 font-weight-bold">A/23 shivpuri udai mode,<br> Gangapur city
                        </p>
                    </div>
                    <div class="contact-page__info-box-phone">
                        <h4 class="contact-page__info-box-tilte">Phone</h4>
                        <p>
                            <a class="text-black-50 font-weight-bold" href="tel:+91 90240 50888">Mobile: +91 90240
                                50888</a>
                        </p>
                    </div>
                    <div class="contact-page__info-box-email">
                        <h4 class="contact-page__info-box-tilte">Email</h4>
                        <p>
                            <a class="text-black-50 font-weight-bold" href="sevanjalifoundationggc@gmail.com">sevanjalifoundationggc@gmail.com</a>
                            <br>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Contact"
}
</script>

<style scoped>
legend {
    font-size: 17px !important;
    color: black;
}
</style>
