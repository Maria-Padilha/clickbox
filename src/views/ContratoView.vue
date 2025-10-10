<template>
  <v-app-bar elevation="1" class="d-flex align-center px-2">
    <v-btn icon="mdi-menu" size="large" variant="text" @click="menu = !menu" density="compact" />
    <p class="text-xl ml-2">Maraluá <span class="texto-color-laranja">Contratos</span></p>

    <v-spacer />

    <v-switch
        inset
        color="var(--color-orange)"
        hide-details false-icon="mdi-weather-night"
        true-icon="mdi-white-balance-sunny"
        v-model="themeStore.darkMode"
    />
  </v-app-bar>

  <v-navigation-drawer v-model="menu" :width="drawerWidth" class="menu-scroll">
    <v-form class="flex flex-col">
      <!-- CONTRATANTE -->
      <v-card elevation="0" rounded="0" color="transparent">
        <v-card-title
            @click="toggleContratante = !toggleContratante"
            class="py-2 d-flex cursor-pointer align-center gap-3 flex-column justify-center mb-3 background-card"
        >
          <v-btn icon="mdi-file-outline" size="large" variant="tonal" density="comfortable" color="var(--color-orange)"/>

          <div class="flex items-center gap-2" style="cursor: pointer;">
            <h1 class="text-xl font-bold texto-color-laranja">Contratante</h1>
            <v-icon
                :icon="!toggleContratante ? 'mdi-chevron-down' : 'mdi-chevron-up'"
                size="20px" color="var(--color-orange)"
            />
          </div>
        </v-card-title>

        <v-expand-transition>
          <v-card-text v-if="toggleContratante" class="flex flex-col gap-4">
            <v-text-field v-bind="fProps" label="Nome" v-model="form.nome"/>
            <v-text-field v-bind="fProps" label="CPF" v-model="form.cpf" v-mask-cpf />


            <v-text-field v-bind="fProps" label="CEP" v-model="form.cep" v-mask-cep/>

            <v-text-field v-bind="fProps" label="Endereço" v-model="form.endereco"/>
            <v-text-field v-bind="fProps" label="Bairro" v-model="form.bairro"/>

            <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-2">
              <v-text-field v-bind="fProps" label="Nº" v-model="form.num"/>
              <v-text-field v-bind="fProps" label="Comp." v-model="form.comp"/>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-2">
              <v-text-field v-bind="fProps" label="Cidade" v-model="form.cidade"/>
              <v-text-field v-bind="fProps" label="UF" v-model="form.uf" maxlength="2"/>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-2">
              <v-text-field v-bind="fProps" label="Telefone" v-model="form.telefone" v-mask-phone.br/>
              <v-text-field v-bind="fProps" label="E-mail" v-model="form.email" />
            </div>

          </v-card-text>
        </v-expand-transition>
      </v-card>

      <!-- QUADRO RESUMO / EVENTO -->
      <v-card elevation="0" rounded="0" color="transparent">
        <v-card-title @click="toggleEvento = !toggleEvento"
                      class="py-2 d-flex align-center gap-3 cursor-pointer flex-column justify-center mb-3 background-card">
          <v-btn icon="mdi-party-popper" size="large" variant="tonal" density="comfortable" color="var(--color-orange)"/>

          <div class="flex items-center gap-2" style="cursor: pointer;">
            <h1 class="text-xl font-bold texto-color-laranja">Sobre o Evento</h1>
            <v-icon
                :icon="!toggleEvento ? 'mdi-chevron-down' : 'mdi-chevron-up'"
                size="20px" color="var(--color-orange)"
            />
          </div>
        </v-card-title>

        <v-expand-transition>
          <v-card-text v-if="toggleEvento" class="flex flex-col gap-4">
            <v-select
                v-bind="fProps" label="Equipamento" v-model="form.equipamento"
                :items="['Plataforma 360', 'Totem Fotográfico', 'Espelho Retrô', 'Cabine Fotográfica', 'Ixpia a Foto']"
            />
            <v-text-field v-bind="fProps" label="Tipo de Evento" v-model="form.evento"/>

            <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-2">
              <v-text-field v-bind="fProps" type="date" label="Data do Evento" v-model="form.data_evento"/>
              <v-text-field v-bind="fProps" type="time" label="Horário de Início" v-model="form.inicio_evento"/>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-2">
              <v-text-field v-bind="fProps" type="time" label="Horário de Término" v-model="form.termino_evento"/>
              <v-text-field v-bind="fProps" label="Carga horária (h)" v-model="form.qtd_horas_evento"/>
            </div>

            <v-text-field v-bind="fProps" label="Local" v-model="form.local_evento"/>
            <v-text-field v-bind="fProps" label="Cidade do Evento" v-model="form.cidade_evento"/>

            <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-2">
              <v-text-field v-bind="fProps" label="Valor (R$)" v-model="form.valor_evento"/>
              <v-text-field v-bind="fProps" label="Desconto (R$)" v-model="form.desconto_evento"/>
            </div>

            <v-text-field v-bind="fProps" label="Brinde" v-model="form.brinde_evento"/>

            <!-- Autorização de publicação -->
            <div class="mt-2">
              <p class="text-sm text-gray-400 font-semibold">Autorização de publicação nas redes sociais</p>
              <v-switch hide-details v-model="form.autorizacao_publicacao" color="var(--color-orange)">
                <template v-slot:label>
                  <p class="text-sm text-gray-400 font-semibold">
                    {{ form.autorizacao_publicacao ? 'Autorizar' : 'Não Autorizar' }}</p>
                </template>
              </v-switch>
            </div>
          </v-card-text>
        </v-expand-transition>
      </v-card>

      <!-- MONTAGEM / DESMONTAGEM -->
      <v-card elevation="0" rounded="0" color="transparent">
        <v-card-title @click="toggleMontagem = !toggleMontagem"
                      class="py-2 d-flex align-center gap-3 cursor-pointer flex-column justify-center mb-3 background-card">
          <v-btn icon="mdi-car" size="large" variant="tonal" density="comfortable" color="var(--color-orange)"/>

          <div class="flex items-center gap-2 flex-wrap justify-center" style="cursor: pointer;">
            <h1 class="text-xl font-bold texto-color-laranja text-center">Mont. e Desmont.</h1>
            <v-icon
                :icon="!toggleMontagem ? 'mdi-chevron-down' : 'mdi-chevron-up'"
                size="20px" color="var(--color-orange)"
            />
          </div>
        </v-card-title>

        <v-expand-transition>
          <v-card-text v-if="toggleMontagem" class="flex flex-col gap-4">
            <p class="text-sm text-gray-400 font-semibold">Montagem</p>
            <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-2">
              <v-text-field v-bind="fProps" type="date" label="Data" v-model="form.data_montagem"/>
              <v-text-field v-bind="fProps" type="time" label="Horário" v-model="form.inicio_montagem"/>
            </div>

            <p class="text-sm text-gray-400 font-semibold mt-2">Desmontagem</p>
            <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-2">
              <v-text-field v-bind="fProps" type="date" label="Data" v-model="form.data_desmontagem"/>
              <v-text-field v-bind="fProps" type="time" label="Horário" v-model="form.inicio_desmontagem"/>
            </div>
          </v-card-text>
        </v-expand-transition>
      </v-card>

      <!-- ASSINATURA / RODAPÉ -->
      <v-card elevation="0" rounded="0" color="transparent">
        <v-card-title @click="toggleAssinatura = !toggleAssinatura"
                      class="py-2 d-flex align-center gap-3 cursor-pointer flex-column justify-center mb-3 background-card">
          <v-btn icon="mdi-file-edit" size="large" variant="tonal" density="comfortable" color="var(--color-orange)"/>

          <div class="flex items-center gap-2 flex-wrap justify-center" style="cursor: pointer;">
            <h1 class="text-xl font-bold texto-color-laranja text-center">Assinatura</h1>
            <v-icon
                :icon="!toggleAssinatura ? 'mdi-chevron-down' : 'mdi-chevron-up'"
                size="20px" color="var(--color-orange)"
            />
          </div>
        </v-card-title>

        <v-expand-transition>
          <v-card-text v-if="toggleAssinatura" class="flex flex-col gap-4">
            <v-text-field v-bind="fProps" label="Cidade (para assinatura)" v-model="form.cidade"/>
            <v-text-field v-bind="fProps" type="date" label="Data do Contrato" v-model="form.data_contrato"/>
          </v-card-text>
        </v-expand-transition>
      </v-card>
    </v-form>

    <div
        class="absolute top-0 right-0 h-full w-2 cursor-ew-resize bg-transparent hover:bg-orange-200/30 transition"
        @mousedown="startResize"
    ></div>
  </v-navigation-drawer>

  <main class="flex-1 mx-5 my-5">
    <div class="flex flex-wrap gap-3 mb-5 w-100 justify-between">
      <v-btn
          size="small" class="text-none"
          variant="outlined"
          prepend-icon="mdi-broom"
          color="var(--color-orange-medium)"
          @click="clearForm"
      >
        Limpar Formulário
      </v-btn>

      <div class="flex items-center gap-3 flex-wrap">
        <v-btn
            size="small" class="text-none"
            variant="outlined"
            prepend-icon="mdi-download"
            color="var(--color-orange-medium)" :loading="loading"
            @click="gerarContrato"
        >
          Baixar .docx
        </v-btn>

        <v-btn
            size="small" class="text-none"
            :variant="!themeStore.darkMode ? 'tonal' : 'flat'"
            prepend-icon="mdi-reload"
            color="var(--color-orange-medium)" :loading="loading"
            @click="gerarPreview"
        >
          Carregar Contrato
        </v-btn>
      </div>
    </div>

    <div v-if="hasPreview" ref="previewViewport" class="preview-viewport">
      <div ref="previewEl" class="preview-inner" :style="{'--zoom': zoom}"></div>
    </div>

    <v-alert v-else type="info" color="var(--color-secondary)" variant="flat" class="mt-10 text-white">
      Clique em <span class="font-bold">Carregar Contrato</span> para visualizar
    </v-alert>
  </main>
</template>

<script setup>
import {useThemeStore} from "@/stores/theme";
import {ref, onMounted, nextTick, computed, watch} from 'vue'
import PizZip from 'pizzip'
import Docxtemplater from 'docxtemplater'
import {saveAs} from 'file-saver'
import {renderAsync} from 'docx-preview'
import '@/assets/css/docx-preview.css'

const themeStore = useThemeStore()

/** Toggle seções do formulário */
const toggleContratante = ref(true);
const toggleEvento = ref(false);
const toggleMontagem = ref(false);
const toggleAssinatura = ref(false);
0

/** Estados do menu lateral redimensionável */
const menu = ref(true);
const drawerWidth = ref(280);
const resizing = ref(false);

const startResize = () => {
  resizing.value = true
  document.body.style.cursor = 'ew-resize'

  const onMouseMove = (event) => {
    const newWidth = event.clientX
    if (newWidth > 200 && newWidth < 600) drawerWidth.value = newWidth
  }

  const stopResize = () => {
    resizing.value = false
    document.body.style.cursor = ''
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseup', stopResize)
  }

  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseup', stopResize)
}


/** props padrão para todos os campos */
const fProps = {
  variant: 'outlined',
  hideDetails: 'auto',
  density: 'comfortable',
}


/** Dados do formulário */
const form = ref({
  // CONTRATANTE
  nome: '', cpf: '', endereco: '', num: '', comp: '', cep: '',
  bairro: '', cidade: '', uf: '', telefone: '', email: '',
  // QUADRO RESUMO / EVENTO
  equipamento: null, evento: '',
  data_evento: '', inicio_evento: '', termino_evento: '',
  qtd_horas_evento: '', local_evento: '', cidade_evento: '',
  valor_evento: '', desconto_evento: '', brinde_evento: '',
  autorizacao_publicacao: false, // sim | nao
  // MONTAGEM / DESMONTAGEM
  data_montagem: '', inicio_montagem: '',
  data_desmontagem: '', inicio_desmontagem: '',
  // ASSINATURA
  data_contrato: '',
});


/** Estado do app */
const loading = ref(false)
const arrayBufferModelo = ref(null)
const previewEl = ref(null)
const previewViewport = ref(null)
const hasPreview = ref(false)
const currentPage = ref(1)
const zoom = ref(1)
const scrollHandler = ref(null)

/** Carrega o modelo .docx do servidor */
async function carregarModelo() {
  const resp = await fetch('/modelo-contrato-2.docx')
  if (!resp.ok) throw new Error('Não foi possível carregar o modelo')
  arrayBufferModelo.value = await resp.arrayBuffer()
}

onMounted(() => {
  carregarModelo().catch(console.error)
})


/** Formatação de valores monetários em BRL */
const valorEventoBRL = computed(() => {
  const v = (form.value.valor_evento || '').toString().replace(/[^\d,.-]/g, '').replace(',', '.')
  const n = Number(v)
  if (isNaN(n)) return form.value.valor_evento || ''
  return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(n)
})

const descontoEventoBRL = computed(() => {
  const v = (form.value.desconto_evento || '').toString().replace(/[^\d,.-]/g, '').replace(',', '.')
  const n = Number(v)
  if (isNaN(n)) return form.value.desconto_evento || ''
  return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(n)
})

/** Formatação de data */
function formatDate(dateString) {
  if (!dateString) return ''
  const [ano, mes, dia] = dateString.split('-')
  return `${dia}/${mes}/${ano}`
}


/** Preenche os dados no template */
function setTemplateData(doc) {
  doc.setData({
    // CONTRATANTE
    nome: form.value.nome,
    cpf: form.value.cpf,
    endereco: form.value.endereco,
    num: form.value.num,
    comp: form.value.comp,
    cep: form.value.cep,
    bairro: form.value.bairro,
    cidade: form.value.cidade,
    uf: form.value.uf,
    telefone: form.value.telefone,
    email: form.value.email,

    // QUADRO RESUMO / EVENTO
    equipamento: form.value.equipamento,
    evento: form.value.evento,
    data_evento: formatDate(form.value.data_evento),
    inicio_evento: form.value.inicio_evento,
    termino_evento: form.value.termino_evento,
    qtd_horas_evento: form.value.qtd_horas_evento,
    local_evento: form.value.local_evento,
    cidade_evento: form.value.cidade_evento,
    servico_evento: form.value.equipamento,
    valor_evento: valorEventoBRL.value,
    desconto_evento: descontoEventoBRL.value,
    brinde_evento: form.value.brinde_evento,
    publicar_sim: form.value.autorizacao_publicacao ? 'X' : '',
    publicar_nao: !form.value.autorizacao_publicacao ? 'X' : '',

    // MONTAGEM / DESMONTAGEM
    data_montagem: formatDate(form.value.data_montagem),
    inicio_montagem: form.value.inicio_montagem,
    data_desmontagem: formatDate(form.value.data_desmontagem),
    inicio_desmontagem: form.value.inicio_desmontagem,

    // ASSINATURA
    data_contrato: formatDate(form.value.data_contrato),
  })
}


/** Gera e baixa o arquivo .docx preenchido */
async function gerarContrato() {
  try {
    loading.value = true
    if (!arrayBufferModelo.value) await carregarModelo()

    const zip = new PizZip(arrayBufferModelo.value)
    const doc = new Docxtemplater(zip, {
      paragraphLoop: true, linebreaks: true, delimiters: {start: '[[', end: ']]'}
    })
    setTemplateData(doc)
    doc.render()

    const out = doc.getZip().generate({
      type: 'blob',
      mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    })
    const nomeArquivo = form.value.nome?.trim() ? `Contrato - ${form.value.nome}.docx` : 'Contrato.docx'
    saveAs(out, nomeArquivo)
  } catch (e) {
    console.error(e)
    alert('Erro ao gerar o contrato. Revise as tags do modelo (.docx).')
  } finally {
    loading.value = false
  }
}


/** GERA A PRÉVIA DO CONTRATO */
async function gerarPreview() {
  try {
    loading.value = true
    if (!arrayBufferModelo.value) await carregarModelo()

    const zip = new PizZip(arrayBufferModelo.value)
    const doc = new Docxtemplater(zip, {
      paragraphLoop: true, linebreaks: true, delimiters: {start: '[[', end: ']]'}
    })
    setTemplateData(doc)
    doc.render()

    const filledAB = doc.getZip().generate({type: 'arraybuffer'})

    // garante que o container existe
    hasPreview.value = true
    await nextTick()

    previewEl.value.innerHTML = ''
    await renderAsync(filledAB, previewEl.value, null, {
      inWrapper: true,
      ignoreFonts: false,
      breakPages: true,
      experimental: true,
      className: 'docx',
      trimXmlDeclaration: true,
    })

    // scroll handler (atualiza página atual)
    if (scrollHandler.value && previewViewport.value) {
      previewViewport.value.removeEventListener('scroll', scrollHandler.value)
    }
    scrollHandler.value = () => {
      const pages = previewEl.value?.querySelectorAll('.docx-page') || []
      const contRect = previewViewport.value.getBoundingClientRect()
      let closest = 1, min = Infinity
      pages.forEach((p, i) => {
        const d = Math.abs(p.getBoundingClientRect().top - contRect.top)
        if (d < min) {
          min = d;
          closest = i + 1
        }
      })
      currentPage.value = closest
    }
    previewViewport.value?.addEventListener('scroll', scrollHandler.value, {passive: true})
  } catch (e) {
    console.error(e)
    alert('Erro ao gerar prévia paginada.')
  } finally {
    loading.value = false
  }
}


/** CARREGAR O CONTRATO APÓS MUDANÇAS */
function onFormChange() {
  gerarPreview();
}

watch(form, () => {
  onFormChange()
}, { deep: true })


/** LIMPAR O FORMULÁRIO */
function clearForm() {
  form.value = {
    // CONTRATANTE
    nome: '',
    cpf: '',
    endereco: '',
    num: '',
    comp: '',
    cep: '',
    bairro: '',
    cidade: '',
    uf: '',
    telefone: '',
    email: '',

    // QUADRO RESUMO / EVENTO
    equipamento: '',
    evento: '',
    data_evento: '',
    inicio_evento: '',
    termino_evento: '',
    qtd_horas_evento: '',
    local_evento: '',
    cidade_evento: '',
    servico_evento: '',
    valor_evento: '',
    desconto_evento: '',
    brinde_evento: '',
    autorizacao_publicacao: false,

    // MONTAGEM / DESMONTAGEM
    data_montagem: '',
    inicio_montagem: '',
    data_desmontagem: '',
    inicio_desmontagem: '',

    // ASSINATURA
    data_contrato: ''
  }

  // se quiser limpar também variáveis auxiliares
  if (typeof valorEventoBRL.value !== 'undefined') valorEventoBRL.value = ''
  if (typeof descontoEventoBRL.value !== 'undefined') descontoEventoBRL.value = ''
}


/** BUSCANDO ENDEREÇO PELO CEP */
watch(() => form.value.cep, async (novoCep) => {
  // Remove caracteres não numéricos
  const cepLimpo = novoCep.replace(/\D/g, '')

  // Só busca se tiver 8 dígitos
  if (cepLimpo.length === 8) {
    try {
      const res = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
      const data = await res.json()

      if (!data.erro) {
        form.value.endereco = data.logradouro
        form.value.bairro = data.bairro
        form.value.cidade = data.localidade
        form.value.uf = data.uf
      }
    } catch (error) {
      console.error('Erro ao buscar CEP:', error)
    }
  }
})
</script>

<style scoped>
.menu-scroll {
  scrollbar-color: var(--color-orange) var(--color-primary);
}

.preview-viewport {
  width: 100%;
  height: 100vh;
  overflow: auto;
  background: var(--color-secondary);
  border-radius: 12px;
  padding: 16px;
}

.preview-inner .docx-page {
  margin: 14px auto !important;
  box-shadow: 0 6px 24px rgba(0, 0, 0, .12);
  border-radius: 6px;
  background: #fff;
}

.preview-inner .docx-wrapper {
  transform-origin: top center;
}

.preview-inner {
  -webkit-font-smoothing: antialiased;
  font-kerning: normal;
}
</style>