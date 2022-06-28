--
-- TOC entry 216 (class 1259 OID 24784)
-- Name: tb_eventos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tb_eventos (
    id_evento integer NOT NULL,
    nm_evento character varying(200) NOT NULL,
    ds_evento character varying(200) NOT NULL,
    dt_cadastro timestamp without time zone NOT NULL,
    ds_tipoevento character varying NOT NULL
);


ALTER TABLE public.tb_eventos OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 24783)
-- Name: tb_eventos_id_evento_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tb_eventos_id_evento_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tb_eventos_id_evento_seq OWNER TO postgres;

--
-- TOC entry 3380 (class 0 OID 0)
-- Dependencies: 215
-- Name: tb_eventos_id_evento_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tb_eventos_id_evento_seq OWNED BY public.tb_eventos.id_evento;


--
-- TOC entry 222 (class 1259 OID 24819)
-- Name: tb_ingressos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tb_ingressos (
    id_ingresso integer NOT NULL,
    ds_assento character varying(4) NOT NULL,
    ds_tipo character varying NOT NULL,
    nr_valor double precision NOT NULL,
    id_sessao integer NOT NULL,
    id_venda integer NOT NULL
);


ALTER TABLE public.tb_ingressos OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 24818)
-- Name: tb_ingressos_id_ingresso_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tb_ingressos_id_ingresso_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tb_ingressos_id_ingresso_seq OWNER TO postgres;

--
-- TOC entry 3381 (class 0 OID 0)
-- Dependencies: 221
-- Name: tb_ingressos_id_ingresso_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tb_ingressos_id_ingresso_seq OWNED BY public.tb_ingressos.id_ingresso;


--
-- TOC entry 214 (class 1259 OID 24777)
-- Name: tb_local; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tb_local (
    id_local integer NOT NULL,
    ds_local character varying(40) NOT NULL,
    nr_assentos integer NOT NULL
);


ALTER TABLE public.tb_local OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 24776)
-- Name: tb_local_id_local_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tb_local_id_local_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tb_local_id_local_seq OWNER TO postgres;

--
-- TOC entry 3382 (class 0 OID 0)
-- Dependencies: 213
-- Name: tb_local_id_local_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tb_local_id_local_seq OWNED BY public.tb_local.id_local;


--
-- TOC entry 218 (class 1259 OID 24793)
-- Name: tb_sessoes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tb_sessoes (
    id_sessao integer NOT NULL,
    dt_sessao timestamp without time zone NOT NULL,
    id_local integer NOT NULL,
    id_evento integer NOT NULL,
    "nr_valorInteira" double precision NOT NULL
);


ALTER TABLE public.tb_sessoes OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 24792)
-- Name: tb_sessoes_id_sessao_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tb_sessoes_id_sessao_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tb_sessoes_id_sessao_seq OWNER TO postgres;

--
-- TOC entry 3383 (class 0 OID 0)
-- Dependencies: 217
-- Name: tb_sessoes_id_sessao_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tb_sessoes_id_sessao_seq OWNED BY public.tb_sessoes.id_sessao;


--
-- TOC entry 212 (class 1259 OID 24762)
-- Name: tb_tipousuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tb_tipousuario (
    id_tipousuario integer NOT NULL,
    ds_tipousuario character varying NOT NULL
);


ALTER TABLE public.tb_tipousuario OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 24761)
-- Name: tb_tipousuario_id_tipousuario_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tb_tipousuario_id_tipousuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tb_tipousuario_id_tipousuario_seq OWNER TO postgres;

--
-- TOC entry 3384 (class 0 OID 0)
-- Dependencies: 211
-- Name: tb_tipousuario_id_tipousuario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tb_tipousuario_id_tipousuario_seq OWNED BY public.tb_tipousuario.id_tipousuario;


--
-- TOC entry 210 (class 1259 OID 24755)
-- Name: tb_usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tb_usuario (
    id_usuario integer NOT NULL,
    ds_nome character varying(40) NOT NULL,
    ds_cpf character varying(14) NOT NULL,
    ds_sexo "char" NOT NULL,
    ds_email character varying(50) NOT NULL,
    ds_telefone character varying(15) NOT NULL,
    ds_login character varying(30) NOT NULL,
    ds_senha character varying(200) NOT NULL,
    dt_nascimento date NOT NULL,
    id_tipo_usuario integer
);


ALTER TABLE public.tb_usuario OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 24754)
-- Name: tb_usuario_id_usuario_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tb_usuario_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tb_usuario_id_usuario_seq OWNER TO postgres;

--
-- TOC entry 3385 (class 0 OID 0)
-- Dependencies: 209
-- Name: tb_usuario_id_usuario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tb_usuario_id_usuario_seq OWNED BY public.tb_usuario.id_usuario;


--
-- TOC entry 220 (class 1259 OID 24810)
-- Name: tb_venda; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tb_venda (
    id_venda bigint NOT NULL,
    nr_protocolo integer NOT NULL,
    nr_valorvenda double precision NOT NULL,
    dt_venda timestamp without time zone NOT NULL,
    id_usuario integer,
    ds_formapagamento character varying NOT NULL,
    ds_tipovenda character varying NOT NULL,
    ds_nomecliente character varying,
    ds_tipodocumento character varying,
    nr_documento character varying
);


ALTER TABLE public.tb_venda OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 24809)
-- Name: tb_venda_id_venda_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tb_venda_id_venda_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tb_venda_id_venda_seq OWNER TO postgres;

--
-- TOC entry 3386 (class 0 OID 0)
-- Dependencies: 219
-- Name: tb_venda_id_venda_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tb_venda_id_venda_seq OWNED BY public.tb_venda.id_venda;


--
-- TOC entry 3197 (class 2604 OID 24787)
-- Name: tb_eventos id_evento; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb_eventos ALTER COLUMN id_evento SET DEFAULT nextval('public.tb_eventos_id_evento_seq'::regclass);


--
-- TOC entry 3200 (class 2604 OID 24822)
-- Name: tb_ingressos id_ingresso; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb_ingressos ALTER COLUMN id_ingresso SET DEFAULT nextval('public.tb_ingressos_id_ingresso_seq'::regclass);


--
-- TOC entry 3196 (class 2604 OID 24780)
-- Name: tb_local id_local; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb_local ALTER COLUMN id_local SET DEFAULT nextval('public.tb_local_id_local_seq'::regclass);


--
-- TOC entry 3198 (class 2604 OID 24796)
-- Name: tb_sessoes id_sessao; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb_sessoes ALTER COLUMN id_sessao SET DEFAULT nextval('public.tb_sessoes_id_sessao_seq'::regclass);


--
-- TOC entry 3195 (class 2604 OID 24765)
-- Name: tb_tipousuario id_tipousuario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb_tipousuario ALTER COLUMN id_tipousuario SET DEFAULT nextval('public.tb_tipousuario_id_tipousuario_seq'::regclass);


--
-- TOC entry 3194 (class 2604 OID 24758)
-- Name: tb_usuario id_usuario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb_usuario ALTER COLUMN id_usuario SET DEFAULT nextval('public.tb_usuario_id_usuario_seq'::regclass);


--
-- TOC entry 3199 (class 2604 OID 24813)
-- Name: tb_venda id_venda; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb_venda ALTER COLUMN id_venda SET DEFAULT nextval('public.tb_venda_id_venda_seq'::regclass);


--
-- TOC entry 3367 (class 0 OID 24784)
-- Dependencies: 216
-- Data for Name: tb_eventos; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.tb_eventos (id_evento, nm_evento, ds_evento, dt_cadastro, ds_tipoevento) VALUES (1, 'CALOURADA', 'EVENTO PARA OS CALOUROS DA UFC', '2022-05-20 10:46:43.832252', 'MUSICAL');
INSERT INTO public.tb_eventos (id_evento, nm_evento, ds_evento, dt_cadastro, ds_tipoevento) VALUES (2, 'MUSICAL UFC', 'EVENTO ARTÍSTICO MUSICAL DA UFC', '2022-05-20 10:47:47.845495', 'MUSICAL');


--
-- TOC entry 3373 (class 0 OID 24819)
-- Dependencies: 222
-- Data for Name: tb_ingressos; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.tb_ingressos (id_ingresso, ds_assento, ds_tipo, nr_valor, id_sessao, id_venda) VALUES (1, '1A', 'Inteira', 50, 1, 1);
INSERT INTO public.tb_ingressos (id_ingresso, ds_assento, ds_tipo, nr_valor, id_sessao, id_venda) VALUES (2, '2A', 'Meia', 25, 1, 1);


--
-- TOC entry 3365 (class 0 OID 24777)
-- Dependencies: 214
-- Data for Name: tb_local; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.tb_local (id_local, ds_local, nr_assentos) VALUES (1, 'SALA A', 50);
INSERT INTO public.tb_local (id_local, ds_local, nr_assentos) VALUES (2, 'SALA B', 40);


--
-- TOC entry 3369 (class 0 OID 24793)
-- Dependencies: 218
-- Data for Name: tb_sessoes; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.tb_sessoes (id_sessao, dt_sessao, id_local, id_evento, "nr_valorInteira") VALUES (1, '2022-05-20 10:48:35.091106', 1, 2, 100);
INSERT INTO public.tb_sessoes (id_sessao, dt_sessao, id_local, id_evento, "nr_valorInteira") VALUES (2, '2022-05-20 10:49:02.609028', 2, 1, 75);


--
-- TOC entry 3363 (class 0 OID 24762)
-- Dependencies: 212
-- Data for Name: tb_tipousuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.tb_tipousuario (id_tipousuario, ds_tipousuario) VALUES (1, 'Administrador');
INSERT INTO public.tb_tipousuario (id_tipousuario, ds_tipousuario) VALUES (2, 'Funcionário');
INSERT INTO public.tb_tipousuario (id_tipousuario, ds_tipousuario) VALUES (3, 'Cliente');


--
-- TOC entry 3361 (class 0 OID 24755)
-- Dependencies: 210
-- Data for Name: tb_usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--
INSERT INTO public.tb_usuario (id_usuario, ds_nome, ds_cpf, ds_sexo, ds_email, ds_telefone, ds_login, ds_senha, dt_nascimento, id_tipo_usuario) VALUES
(1, 'Admin', '00000000000', 'M', 'admin@admin.com', '00000000000', 'admin', '$2b$10$GTFtcFy5asETLbu.vf9NX.NfRZkAFRSz8mLA0dPJ.8apoiFxYiSsO', '2000-01-01', 1);


--
-- TOC entry 3371 (class 0 OID 24810)
-- Dependencies: 220
-- Data for Name: tb_venda; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.tb_venda (id_venda, nr_protocolo, nr_valorvenda, dt_venda, id_usuario, ds_formapagamento, ds_tipovenda, ds_nomecliente, ds_tipodocumento, nr_documento) VALUES (1, 123456, 75, '2022-05-20 11:20:29.752367', NULL, 'à vista', 'guichê', 'Bonfim Amaro', 'Rg', '99002142455');


--
-- TOC entry 3387 (class 0 OID 0)
-- Dependencies: 215
-- Name: tb_eventos_id_evento_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tb_eventos_id_evento_seq', 2, true);


--
-- TOC entry 3388 (class 0 OID 0)
-- Dependencies: 221
-- Name: tb_ingressos_id_ingresso_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tb_ingressos_id_ingresso_seq', 2, true);


--
-- TOC entry 3389 (class 0 OID 0)
-- Dependencies: 213
-- Name: tb_local_id_local_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tb_local_id_local_seq', 2, true);


--
-- TOC entry 3390 (class 0 OID 0)
-- Dependencies: 217
-- Name: tb_sessoes_id_sessao_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tb_sessoes_id_sessao_seq', 2, true);


--
-- TOC entry 3391 (class 0 OID 0)
-- Dependencies: 211
-- Name: tb_tipousuario_id_tipousuario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tb_tipousuario_id_tipousuario_seq', 3, true);


--
-- TOC entry 3392 (class 0 OID 0)
-- Dependencies: 209
-- Name: tb_usuario_id_usuario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tb_usuario_id_usuario_seq', 1, false);


--
-- TOC entry 3393 (class 0 OID 0)
-- Dependencies: 219
-- Name: tb_venda_id_venda_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tb_venda_id_venda_seq', 1, true);


--
-- TOC entry 3209 (class 2606 OID 24791)
-- Name: tb_eventos pk_id_evento; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb_eventos
    ADD CONSTRAINT pk_id_evento PRIMARY KEY (id_evento);


--
-- TOC entry 3215 (class 2606 OID 24826)
-- Name: tb_ingressos pk_id_ingresso; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb_ingressos
    ADD CONSTRAINT pk_id_ingresso PRIMARY KEY (id_ingresso);


--
-- TOC entry 3207 (class 2606 OID 24782)
-- Name: tb_local pk_id_local; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb_local
    ADD CONSTRAINT pk_id_local PRIMARY KEY (id_local);


--
-- TOC entry 3211 (class 2606 OID 24798)
-- Name: tb_sessoes pk_id_sessao; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb_sessoes
    ADD CONSTRAINT pk_id_sessao PRIMARY KEY (id_sessao);


--
-- TOC entry 3205 (class 2606 OID 24769)
-- Name: tb_tipousuario pk_id_tipousuario; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb_tipousuario
    ADD CONSTRAINT pk_id_tipousuario PRIMARY KEY (id_tipousuario);


--
-- TOC entry 3203 (class 2606 OID 24760)
-- Name: tb_usuario pk_id_usuario; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb_usuario
    ADD CONSTRAINT pk_id_usuario PRIMARY KEY (id_usuario);


--
-- TOC entry 3213 (class 2606 OID 24817)
-- Name: tb_venda tb_venda_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb_venda
    ADD CONSTRAINT tb_venda_pkey PRIMARY KEY (id_venda);


--
-- TOC entry 3201 (class 1259 OID 24775)
-- Name: fki_fk_id_tipo_usuario; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_fk_id_tipo_usuario ON public.tb_usuario USING btree (id_tipo_usuario);


--
-- TOC entry 3218 (class 2606 OID 24804)
-- Name: tb_sessoes fk_id_evento; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb_sessoes
    ADD CONSTRAINT fk_id_evento FOREIGN KEY (id_evento) REFERENCES public.tb_eventos(id_evento) NOT VALID;


--
-- TOC entry 3219 (class 2606 OID 24827)
-- Name: tb_ingressos fk_id_sessao; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb_ingressos
    ADD CONSTRAINT fk_id_sessao FOREIGN KEY (id_sessao) REFERENCES public.tb_sessoes(id_sessao);


--
-- TOC entry 3216 (class 2606 OID 24770)
-- Name: tb_usuario fk_id_tipo_usuario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb_usuario
    ADD CONSTRAINT fk_id_tipo_usuario FOREIGN KEY (id_tipo_usuario) REFERENCES public.tb_tipousuario(id_tipousuario) NOT VALID;


--
-- TOC entry 3220 (class 2606 OID 24832)
-- Name: tb_ingressos fk_id_venda; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb_ingressos
    ADD CONSTRAINT fk_id_venda FOREIGN KEY (id_venda) REFERENCES public.tb_venda(id_venda);


--
-- TOC entry 3217 (class 2606 OID 24799)
-- Name: tb_sessoes fk_idi_local; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb_sessoes
    ADD CONSTRAINT fk_idi_local FOREIGN KEY (id_local) REFERENCES public.tb_local(id_local);


-- Completed on 2022-05-23 11:51:30

--
-- PostgreSQL database dump complete
--

-- Creating RF_FS01 view
CREATE OR REPLACE VIEW public."RF_FS01"
 AS
SELECT
	e.id_evento,
	s.id_sessao,
	e.ds_evento,
	e.ds_tipoevento,
	l.ds_local,
	CAST(s.dt_sessao AS DATE) AS ds_data,
	CAST(s.dt_sessao AS TIME) AS ds_hora,
	(SELECT COUNT(*) FROM tb_ingressos WHERE ds_tipo = 'Inteira' AND id_sessao = s.id_sessao) AS total_ingressos_inteira,
	(SELECT COUNT(*) FROM tb_ingressos WHERE ds_tipo = 'Meia' AND id_sessao = s.id_sessao) AS total_ingressos_meia,
	(SELECT COUNT(*) FROM tb_ingressos WHERE id_sessao = s.id_sessao) AS total_ingressos_vendidos,
	SUM(i.nr_valor) AS valor_total_arrecadado
FROM tb_eventos AS e
INNER JOIN tb_sessoes AS s ON s.id_evento = e.id_evento
INNER JOIN tb_local AS l ON l.id_local = s.id_local
LEFT JOIN tb_ingressos AS i ON i.id_sessao = s.id_sessao
GROUP BY e.id_evento, s.id_sessao , l.id_local
ORDER BY ds_data, ds_hora ASC;

ALTER TABLE public."RF_FS01"
    OWNER TO postgres;

-- Creating RF_FS02 view
CREATE OR REPLACE VIEW public."RF_FS02"
 AS
SELECT
	e.id_evento,
	s.id_sessao,
	e.ds_evento,
	e.ds_tipoevento,
	l.ds_local,
	CAST(s.dt_sessao AS DATE) AS ds_data,
	CAST(s.dt_sessao AS TIME) AS ds_hora,
	l.nr_assentos - (SELECT COUNT(*) FROM tb_ingressos WHERE id_sessao = s.id_sessao) AS ingressos_disponiveis
FROM tb_eventos AS e
INNER JOIN tb_sessoes AS s ON s.id_evento = e.id_evento
INNER JOIN tb_local AS l ON l.id_local = s.id_local
LEFT JOIN tb_ingressos AS i ON i.id_sessao = s.id_sessao
GROUP BY e.id_evento, s.id_sessao , l.id_local
ORDER BY ds_data, ds_hora ASC;

ALTER TABLE public."RF_FS02"
    OWNER TO postgres;

