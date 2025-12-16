---
layout: featured

title_tr: İğneli Epilasyon

permalink: hizmetler/igneli-epilasyon

number: 4

categories: [service]
icon: /assets/img/icons/algolia-brands.svg
image: /assets/img/services/04.jpg
---

<div class="row">
    <div class="col-md-12">
        <div class="service-details mb-40">
                <h3>{% translate service_4.header_1 %}</h3>
                {% translate service_4.text_1 %}
                <div class="contact-person">
                    {% if site.lang == "tr" %}
                    <b><a href="/sayfalar/iletisim">
                    {% endif %}
                    {% if site.lang == "en" %}
                    <b><a href="/en/pages/contact">
                    {% endif %}
                    <span><i class="fas fa-phone"></i>{% translate service_4.btn_1 %}</span></a></b><p></p>
                </div>
            </div>
            <h4>{% translate service_4.header_2 %}</h4>
            {% translate service_4.text_2 %}
            <p></p>
        </div>
    </div>
</div>