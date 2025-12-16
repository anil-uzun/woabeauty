---
layout: featured

title_tr: Depilasyon

permalink: hizmetler/depilasyon

number: 3

type: vücut
categories: [service]
icon: /assets/img/icons/american-sign-language-interpreting-solid.svg
image: /assets/img/services/03.jpg
---

<div class="row">
    <div class="col-md-12">
        <div class="service-details mb-40">
            <h2>{% translate service_3.header_1 %}</h2>
            <div class="contact-person">
                {% if site.lang == "tr" %}
                <b><a href="/sayfalar/iletisim"><span><i class="fas fa-phone"></i>{% translate service_3.btn_1 %}</span></a></b><p></p>
                {% endif %}
                {% if site.lang == "en" %}
                <b><a href="/en/pages/contact"><span><i class="fas fa-phone"></i>{% translate service_3.btn_1 %}</span></a></b><p></p>
                {% endif %}
            </div>
            {% translate service_3.text_1 %}
            <br><br>
        </div>
    </div>
</div>